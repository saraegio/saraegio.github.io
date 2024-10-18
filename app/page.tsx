'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const quotes = [
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "The best thing to hold onto in life is each other.",
  "I love you not only for what you are, but for what I am when I am with you.",
  // Add more quotes as needed
];

const videoIds = [
  'dQw4w9WgXcQ',
  'ZbZSe6N_BXs',
  'JGwWNGJdvx8',
  // Add more video IDs as needed
];

export default function HomePage() {
  const [randomQuote, setRandomQuote] = useState('');
  const [randomVideoId, setRandomVideoId] = useState('');
  const [randomImageIndex, setRandomImageIndex] = useState(1);

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setRandomVideoId(videoIds[Math.floor(Math.random() * videoIds.length)]);
    setRandomImageIndex(Math.floor(Math.random() * 98) + 1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sara & Gio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="#gallery" className="hover:text-gray-300">Gallery</Link></li>
            <li><Link href="#quotes" className="hover:text-gray-300">Quotes</Link></li>
            <li><Link href="#videos" className="hover:text-gray-300">Videos</Link></li>
            <li><Link href="#timeline" className="hover:text-gray-300">Timeline</Link></li>
            <li><Link href="#messages" className="hover:text-gray-300">Messages</Link></li>
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
              <div className="bg-black bg-opacity-70 p-6 rounded-lg mb-8">
                <p className="text-xl italic">{randomQuote}</p>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={`https://www.youtube.com/embed/${randomVideoId}`} 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <Image 
                src={`/photos/photo_${randomImageIndex}.png`} 
                alt="Sara & Gio" 
                width={400} 
                height={600} 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Other sections (Gallery, Quotes, Videos, Timeline, Messages) can be added here */}
      </main>

      <footer className="bg-black bg-opacity-50 text-center p-4 mt-16">
        <p>&copy; 2023 Sara & Gio. All rights reserved.</p>
      </footer>
    </div>
  );
}