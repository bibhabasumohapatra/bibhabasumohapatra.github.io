"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Background />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="space-y-8">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient"
            >
              Hello, I'm Bibhabasu Mohapatra
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              A passionate Deep Learning enthusiast dedicated to advancing the field of artificial intelligence.
            </motion.p>
          </section>

          {/* Current Role */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 backdrop-blur-sm bg-background/50 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold">Current Role</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Currently working as a Data Scientist at Microsoft, previously working as an Engineer (Computer Vision) at Aira Matrix. 
              I'm deeply committed to pushing the boundaries of AI research.
            </p>
          </motion.section>

          {/* Research Interests */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-4 backdrop-blur-sm bg-background/50 p-6 rounded-lg"
          >
            <h2 className="text-3xl font-semibold">Research Interests</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm particularly interested in topics related to self-supervised learning, multi-modal learning, and Representations. 
              These areas fascinate me because of their potential to revolutionize AI and address complex challenges in various domains.
            </p>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold">Let's Connect</h2>
            <div className="flex gap-4">
              <Button asChild variant="outline" className="backdrop-blur-sm">
                <Link href="https://bibhabasumohapatra.github.io/files/cv.pdf">
                  View CV
                </Link>
              </Button>
              <Button asChild className="backdrop-blur-sm">
                <Link href="mailto:bibhabasumohapatrabm@gmail.com">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}