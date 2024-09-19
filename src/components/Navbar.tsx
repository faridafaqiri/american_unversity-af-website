import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#223363] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">AUAF</div>
        <div>
          <Link href="/" className="text-white hover:underline mx-2">
            Home
          </Link>
          <Link href="/about" className="text-white hover:underline mx-2">
            About
          </Link>
          <Link href="/contact" className="text-white hover:underline mx-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
