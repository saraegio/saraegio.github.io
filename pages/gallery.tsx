import Link from 'next/link';

export default function Gallery() {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(89)].map((_, index) => (
          <img
            key={index}
            src={`/photos/photo_${index + 1}.png`}  // Adjust the path if necessary
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        ))}
      </div>
      <Link href="/">
        <a className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Go back to Home</a>
      </Link>
    </div>
  );
}
