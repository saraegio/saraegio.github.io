import Link from 'next/link';

export default function Messages() {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <p>This page could contain a form for sending messages or displaying received messages.</p>
      <Link href="/">
        <a className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Go back to Home</a>
      </Link>
    </div>
  );
}
