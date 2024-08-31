"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaAsterisk } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10 text-default"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-gilda text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 tracking-tighter"
          >
            Craft ATS-Optimized Resumes Instantly
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 font-light tracking-tight"
          >
            Personalized, Powerful, and Ready to Impress – Tailored to Your
            Needs in Minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-poppins mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link href="#footer">
              <Button
                className="py-2 sm:py-3 px-4 sm:px-6 rounded text-sm sm:text-base w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Join Waitlist
              </Button>
            </Link>

            <div className="flex items-center text-center space-x-2">
              <FaAsterisk className="text-xs text-secondary" />
              <p className="text-sm">Coming Soon!</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-dark"
          >
            Create ATS-optimized resumes instantly with our AI-driven builder.
            No account, no fees, just results.
          </motion.p>
        </motion.div>

        {/* Resume Images */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
        >
          {/* Glowing blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute right-0 top-0 z-30 w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto"
          >
            <Image
              src="/images/resume-template-1.png"
              alt="Resume 1"
              width={250}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto max-w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute right-4 sm:right-8 top-8 sm:top-12 z-20 w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto"
          >
            <Image
              src="/images/resume-template-3.png"
              alt="Resume 2"
              width={250}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto max-w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute right-8 sm:right-16 top-16 sm:top-24 z-10 w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto"
          >
            <Image
              src="/images/resume-template-3.png"
              alt="Resume 3"
              width={250}
              height={350}
              className="rounded-lg shadow-lg w-full h-auto max-w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Hero;
