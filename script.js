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

// Function to load all quotes
function loadAllQuotes() {
    const quotesContainer = document.getElementById('all-quotes');
    quotes.forEach(quote => {
        const p = document.createElement('p');
        p.textContent = quote;
        quotesContainer.appendChild(p);
    });
}

// Array of photo URLs
const photos = [
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    'https://example.com/photo3.jpg',
    // Add more photo URLs as needed
];

// Function to load random photos
function loadRandomPhotos() {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = ''; // Clear existing photos
    
    const shuffledPhotos = [...photos].sort(() => 0.5 - Math.random());
    const selectedPhotos = shuffledPhotos.slice(0, 6); // Select 6 random photos
    
    selectedPhotos.forEach(photoUrl => {
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = 'Sara & Gio';
        photoContainer.appendChild(img);
    });
}

// Call functions when the page loads
window.onload = function() {
    setRandomBackground();
    setRandomQuote();
    loadAllQuotes();
    loadRandomPhotos();
};
