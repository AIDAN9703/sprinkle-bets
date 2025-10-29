"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="sticky top-0 z-50 p-4">
      <nav
        id="navbar"
        className="max-w-6xl mx-auto navbar-glass dark:navbar-glass-dark transition-all duration-300 rounded-2xl"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <Image
                  src="/sb-logo.png"
                  alt="Sprinkle Bets"
                  width={40}
                  height={40}
                  className="sm:w-12 sm:h-12"
                />
              </Link>
              {/* Desktop Navigation */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <Link
                    href="/about"
                    className="text-foreground/80 hover:text-foreground transition-colors font-bold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketplace"
                    className="text-foreground/80 hover:text-foreground transition-colors font-bold"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leaderboard"
                    className="text-foreground/80 hover:text-foreground transition-colors font-bold"
                  >
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-primary" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground/70" />
                )}
              </button>

              <Link href="/login">
                <Button variant="default" className="font-bold">
                  Sign In
                </Button>
              </Link>
              <Link href="/start-selling">
                <Button variant="outline" className="font-bold">
                  Start Selling
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-6 border-t border-border/30">
              {/* Navigation Links */}
              <div className="space-y-4">
                <Link
                  href="/about"
                  className="block text-foreground/80 hover:text-foreground transition-colors font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/marketplace"
                  className="block text-foreground/80 hover:text-foreground transition-colors font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Marketplace
                </Link>
                <Link
                  href="/leaderboard"
                  className="block text-foreground/80 hover:text-foreground transition-colors font-bold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Leaderboard
                </Link>
              </div>

              {/* Theme Toggle */}
              <div className="pt-2">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <span className="font-bold text-foreground">Theme</span>
                  {isDark ? (
                    <Sun className="h-5 w-5 text-primary" />
                  ) : (
                    <Moon className="h-5 w-5 text-foreground/70" />
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <Link href="/login" className="block">
                  <Button variant="outline" className="w-full font-bold">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" className="block">
                  <Button className="w-full btn-lime font-bold">
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
