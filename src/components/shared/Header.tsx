"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const megaMenuItems = [
  {
    title: "Solutions",
    links: [
      { name: "E-commerce", href: "/ecommerce" },
      { name: "SaaS", href: "/saas" },
      { name: "Finance", href: "/finance" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // State for mega menu

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev); // Toggle mega menu visibility
  };

  return (
    <header className="flex justify-between items-center px-6 py-4">
      {/* Left Logo */}
      <div className="w-1/3">
        <Link href="/">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
            alt="logo"
            height={32}
            width={200}
          />
        </Link>
      </div>

      {/* Centered Navigation */}
      <div className="w-1/3 hidden md:flex justify-center">
        <nav className="flex gap-6">
          <div className="relative ">
            <div className="flex items-center justify-center">
              <button
                onClick={toggleMegaMenu}
                className="text-white hover:text-white  gap-1"
              >
                Solutions{" "}
                {isMegaMenuOpen ? (
                  <BiChevronDown className="inline h-4 w-4 text-white" />
                ) : (
                  <BiChevronRight className="inline h-4 w-4 text-white" />
                )}
              </button>
            </div>

            {isMegaMenuOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white font-bold shadow-lg rounded-lg p-3 space-y-3">
                <div className="p-4 bg-gray-100 rounded-md">
                  {megaMenuItems[0].links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-gray-700 hover:text-blue-500"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/services" className="text-white hover:text-white">
            Services
          </Link>
          <Link href="/about" className="text-white hover:text-white">
            About
          </Link>
        </nav>
      </div>

      {/* Right Side with Button and Hamburger for Mobile */}
      <div className="w-1/3 flex justify-end items-center gap-4">
        <Button className="flex gap-2 justify-center items-center border ">
          Contact Us <BiChevronRight />
        </Button>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white p-4">
          <nav>
            <Link href="/" className="block py-2 hover:text-blue-500">
              Solutions
            </Link>
            <Link href="/services" className="block py-2 hover:text-blue-500">
              Services
            </Link>
            <Link href="/about" className="block py-2 hover:text-blue-500">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
