"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { div } from "framer-motion/client";

const megaMenuItems = [
  {
    title: "Solutions",
    links: [
      { name: "AnyCaaS", href: "/AnyCaaS" },
      { name: "AnyBaaS", href: "/AnyBaaS" },
      { name: "AnyPaaS", href: "/AnyPaaS" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // State for mega menu
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll position

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev); // Toggle mega menu visibility
  };

  // Check if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true); // Set the header to white if scrolled
      } else {
        setIsScrolled(false); // Set the header back to default when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex   justify-between items-center px-6 py-4 w-full fixed top-0 left-0 ${
        isScrolled ? "bg-white text-black z-50" : "bg-transparent text-white"
      }`}
    >
      {/* Left Logo */}
      <div className="w-1/3">
        {isScrolled ? (
          <Link href="/">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
              alt="logo"
              height={32}
              width={200}
            />
          </Link>
        ) : (
          <Link href="/">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
              alt="logo"
              height={32}
              width={200}
            />
          </Link>
        )}
      </div>

      {/* Centered Navigation */}
      <div className="hidden md:flex justify-center w-1/3">
        <nav className="flex gap-6">
          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onMouseEnter={toggleMegaMenu}
                className={`${
                  isScrolled
                    ? "text-black hover:border-black"
                    : "text-white hover:border-white"
                }  flex justify-center items-center gap-1`}
              >
                Solutions{" "}
                {isMegaMenuOpen ? (
                  <BiChevronDown
                    className={`inline h-4 w-4 ${
                      isScrolled
                        ? "text-black hover:border-black"
                        : "text-white hover:border-white"
                    } `}
                  />
                ) : (
                  <BiChevronRight
                    className={`inline h-4 w-4 ${
                      isScrolled
                        ? "text-black hover:border-black"
                        : "text-white hover:border-white"
                    } `}
                  />
                )}
              </button>
            </div>

            {isMegaMenuOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white font-bold shadow-lg rounded-lg p-3 space-y-3">
                <div
                  onMouseLeave={toggleMegaMenu}
                  className="p-4 bg-gray-100 rounded-md"
                >
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
          <Link
            href="/service"
            className={` border-b-2 ${
              isScrolled
                ? "text-black hover:border-black"
                : "text-white hover:border-white"
            } border-transparent  transition-all duration-700 ease-in-out`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`${
              isScrolled
                ? "text-black hover:border-black"
                : "text-white hover:border-white"
            } border-b-2 border-transparent  transition-all duration-700 ease-in-out`}
          >
            About
          </Link>
        </nav>
      </div>

      {/* Right Side with Button and Hamburger for Mobile */}
      <div className="w-1/3 flex justify-end items-center gap-4">
        <div className="hidden md:block">
          {isScrolled ? (
            <Button className="flex gap-2 justify-center  bg-orange-500 items-center border ">
              Contact Us <BiChevronRight />
            </Button>
          ) : (
            <Button className="flex gap-2 justify-center items-center border ">
              Contact Us <BiChevronRight />
            </Button>
          )}
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
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
