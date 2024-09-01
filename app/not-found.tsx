"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-gilda text-6xl sm:text-7xl md:text-8xl mb-4 text-dark">404</h1>
        <h2 className="font-gilda text-3xl sm:text-4xl md:text-5xl mb-6 text-dark">Page Not Found</h2>
        <p className="text-lg mb-8 text-dark/70 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link href="/">
          <Button className="py-2 px-4 text-base">
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}