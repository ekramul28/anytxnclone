import Link from "next/link";
import Button from "../ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Placeholder for spacing */}
      <div className="w-1/3">
        {" "}
        <Link href="/">
          <h1 className="text-2xl font-bold">LOGO</h1>
        </Link>
      </div>

      {/* Centered Logo */}
      <div className="w-1/3 flex justify-center">
        <nav className="hidden md:flex gap-4">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-black">
            Services
          </Link>
        </nav>
      </div>

      {/* Right Nav & Button */}
      <div className="w-1/3 flex justify-end items-center gap-4">
        <Button className="bg-black text-white px-4 py-2">Contact Us</Button>
      </div>
    </header>
  );
};

export default Header;
