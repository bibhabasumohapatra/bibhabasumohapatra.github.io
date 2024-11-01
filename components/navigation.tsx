"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "YouTube",
    href: "https://bibhabasumohapatra.github.io/youtube/",
  },
  {
    name: "Blogs",
    href: "https://bibhabasumohapatra.github.io/blog",
  },
  {
    name: "CV",
    href: "https://bibhabasumohapatra.github.io/files/cv.pdf",
  },
  {
    name: "Publications",
    href: "https://bibhabasumohapatra.github.io/publication.html",
  },
];

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          BM
        </Link>
        
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}