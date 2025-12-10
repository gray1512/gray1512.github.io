"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NAME, EMAIL } from "@/app/lib/definitions";
import { motion } from "framer-motion";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 300);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-40 w-full transition-all
        bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/40
        ${isScrolled ? "border-b" : "border-b border-transparent"}
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT: NAME */}
        <Link
          href="/"
          className={`font-medium transition ${isScrolled ? 'opacity-100 hover:opacity-80' : 'opacity-0'}`}
        >
          {NAME}
        </Link>

        {/* CENTER: NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition">Skills</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition">Projects</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
        </div>

        {/* RIGHT: EMAIL CTA */}
        <Button asChild className="h-9 px-5 hidden sm:inline-flex rounded-full">
          <a href={`mailto:${EMAIL}`}>Send Email</a>
        </Button>
      </nav>
    </header>
  );
}
