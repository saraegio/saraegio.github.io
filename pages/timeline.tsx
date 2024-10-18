import Link from 'next/link';

export default function Timeline() {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      {/* Example timeline events */}
      <div className="timeline">
        <div className="event">
          <h2 className="event-title">2024 - Project Start</h2>
          <p className="event-description">Description of the starting point of the project.</p>
        </div>
        <div className="event">
          <h2 className="event-title">2025 - First Milestone</h2>
          <p className="event-description">Description of the first major milestone achieved.</p>
        </div>
      </div>
      <Link href="/">
        <a className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Go back to Home</a>
      </Link>
    </div>
  );
}
