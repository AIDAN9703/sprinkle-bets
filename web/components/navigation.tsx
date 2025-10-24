"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (prevScrollPos > currentScrollPos) {
          // Scrolling up - show navbar
          navbar.style.top = "0";
        } else {
          // Scrolling down - hide navbar
          navbar.style.top = "-80px";
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 p-4">
      <nav
        id="navbar"
        className="max-w-6xl mx-auto navbar-glass transition-all duration-300 rounded-2xl"
      >
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/logo-sb.png"
                alt="Sprinkle Bets"
                width={160}
                height={160}
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="default" className=" font-bold">
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-purple-200/30 glass-card">
              <Link
                href="/about"
                className="block text-gray-700 hover:text-gray-900 transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/how-it-works"
                className="block text-gray-700 hover:text-gray-900 transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/marketplace"
                className="block text-gray-700 hover:text-gray-900 transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/leaderboard"
                className="block text-gray-700 hover:text-gray-900 transition-colors font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/login" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-primary/20 font-bold"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold glow">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
