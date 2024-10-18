import Link from 'next/link';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Video 1' },
  { id: 'ZbZSe6N_BXs', title: 'Video 2' },
  { id: 'JGwWNGJdvx8', title: 'Video 3' }
];

export default function Videos() {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>
      <div>
        {videos.map((video) => (
          <div key={video.id} className="mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
      <Link href="/">
        <a className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Go back to Home</a>
      </Link>
    </div>
  );
}
