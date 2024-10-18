import Link from 'next/link';

const quotes = [
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "The best thing to hold onto in life is each other.",
  "I love you not only for what you are, but for what I am when I am with you."
];

export default function Quotes() {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">{quote}</li>
        ))}
      </ul>
      <Link href="/">
        <a className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Go back to Home</a>
      </Link>
    </div>
  );
}
