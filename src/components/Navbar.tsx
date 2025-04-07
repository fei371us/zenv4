"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link className="flex-shrink-0 flex items-center" href="/">
              <Image
                src="https://demo-source.imgix.net/scooter.jpg"
                alt="ZenMatrix Logos"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              href="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors block px-3 py-2 rounded-md"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors block px-3 py-2 rounded-md"
              href="/services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors block px-3 py-2 rounded-md"
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="font-montserrat font-medium text-foreground hover:text-primary transition-colors block px-3 py-2 rounded-md"
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
