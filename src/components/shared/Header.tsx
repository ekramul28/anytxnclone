import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Placeholder for spacing */}
      <div className="w-1/3">
        {" "}
        <Link href="/">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
            alt="logo"
            height={32}
            width={200}
            className="bg-[#0056C0]"
          />
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
