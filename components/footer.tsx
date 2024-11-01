"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/bibhabasuM1610",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/bibhabasumohapatra",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bibhabasu-mohapatra-3b8205193",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:bibhabasumohapatrabm@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-8 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-fit bg-background/80 backdrop-blur-sm border rounded-full p-4">
          <ul className="flex items-center gap-6">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}