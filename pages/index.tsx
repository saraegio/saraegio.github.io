// Use 'use client' only if you're ensuring everything in this component runs in the client-side environment.
//'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu } from 'lucide-react';
import Layout from '../components/layout'; // Ensure the path and case sensitivity are correct.

// Define constants outside of the component if they don't depend on component lifecycle.
const quotes = [
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "The best thing to hold onto in life is each other.",
  "I love you not only for what you are, but for what I am when I am with you."
];

const videoIds = [
  'dQw4w9WgXcQ',
  'ZbZSe6N_BXs',
  'JGwWNGJdvx8'
];

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [randomQuote, setRandomQuote] = useState('');
  const [randomVideoId, setRandomVideoId] = useState('');
  const [randomImageIndex, setRandomImageIndex] = useState(1);

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setRandomVideoId(videoIds[Math.floor(Math.random() * videoIds.length)]);
    setRandomImageIndex(Math.floor(Math.random() * 98) + 1);
  }, []);

  return (
    <Layout>
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sara & Gio</h1>
        <nav>
          <ul className="flex space-x-4">
            {['Home', 'Gallery', 'Quotes', 'Videos', 'Timeline', 'Messages'].map((item, index) => (
              <li key={index}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="flex items-center justify-center">
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
      </main>

      <footer className="bg-black bg-opacity-50 text-center p-4 mt-16">
        <p>&copy; 2024 Sara & Gio. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default HomePage;
