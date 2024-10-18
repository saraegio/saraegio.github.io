// Array of background images
const backgroundImages = [
    'url("https://example.com/image1.jpg")',
    'url("https://example.com/image2.jpg")',
    'url("https://example.com/image3.jpg")',
    // Add more image URLs as needed
];

// Array of quotes
const quotes = [
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "The best thing to hold onto in life is each other.",
    "I love you not only for what you are, but for what I am when I am with you.",
    // Add more quotes as needed
];

// Array of video IDs
const videoIds = [
    'dQw4w9WgXcQ',
    'ZbZSe6N_BXs',
    'JGwWNGJdvx8',
    // Add more video IDs as needed
];

// Function to set random background image
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.getElementById('home').style.backgroundImage = backgroundImages[randomIndex];
}

// Function to set random quote
function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
}

// Function to set random video
function setRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    const videoId = videoIds[randomIndex];
    const videoContainer = document.getElementById('random-video');
    videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

// Function to set random image
function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const randomPhoto = photos[randomIndex];
    document.getElementById('random-image').src = `${basePath}${randomPhoto}`;
}

// Function to load all quotes
function loadAllQuotes() {
    const quotesContainer = document.getElementById('all-quotes');
    quotes.forEach(quote => {
        const p = document.createElement('p');
        p.textContent = quote;
        quotesContainer.appendChild(p);
    });
}

// Function to load photos from the public/photos directory
function loadPhotos() {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = ''; // Clear existing photos
    
    // Initialize an empty array to hold the photo filenames
    const photos = [];

    // Loop through the numbers 1 to 98 to generate photo filenames
    for (let i = 1; i <= 98; i++) {
        photos.push(`photo_${i}.png`);
    }

    // Base path to the photo directory
    const basePath = 'public/photos/';
    
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = `${basePath}${photo}`;
        img.alt = 'Photo in gallery';
        img.style.maxWidth = '300px';  // Style can be adjusted or managed in CSS
        photoContainer.appendChild(img);
    });

    // Set a random image for the home page
    setRandomImage();
}

// Timeline events
const timelineEvents = [
    { date: '2018-06-15', content: 'First met at a coffee shop' },
    { date: '2018-09-01', content: 'Started dating' },
    { date: '2019-02-14', content: 'First Valentine\'s Day together' },
    { date: '2020-03-20', content: 'Moved in together' },
    { date: '2021-12-25', content: 'Got engaged' },
    // Add more events as needed
];

// Function to load timeline
function loadTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    timelineEvents.forEach((event, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        item.innerHTML = `
            <div class="content">
                <h3>${event.date}</h3>
                <p>${event.content}</p>
            </div>
        `;
        timelineContainer.appendChild(item);
    });
}

// Function to handle message submission
function handleMessageSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const timestamp = new Date().toLocaleString();

    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `
        <p>${message}</p>
        <span class="name">${name} - ${timestamp}</span>
    `;

    const messageDisplay = document.getElementById('message-display');
    messageDisplay.insertBefore(messageElement, messageDisplay.firstChild);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
}

// Call functions when the page loads
window.onload = function() {
    setRandomBackground();
    setRandomQuote();
    setRandomVideo();
    loadPhotos();
    loadAllQuotes();
    loadTimeline();

    // Add event listener for message form submission
    document.getElementById('message-form').addEventListener('submit', handleMessageSubmit);
};