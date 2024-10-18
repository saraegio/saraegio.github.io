import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/gallery"><a>Gallery</a></Link></li>
        <li><Link href="/quotes"><a>Quotes</a></Link></li>
        <li><Link href="/videos"><a>Videos</a></Link></li>
        <li><Link href="/timeline"><a>Timeline</a></Link></li>
        <li><Link href="/messages"><a>Messages</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
