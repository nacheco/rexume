"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center relative z-10 text-default">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-[28px] sm:text-[28px] md:text-[42px] lg:text-[48px] xl:text-[62px] font-extrabold leading-[1.1] mb-4 text-center tracking-tighter"
        style={{
          background: 'radial-gradient(circle, #1F2125 62%, #999999 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
       AI-Powered Resume Builder
       <br />
       for Standout Job Applications
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-[13px] md:text-lg mt-4 sm:mt-6 font-light text-center tracking-tight px-4 sm:px-0"
      >
        Craft Your Perfect Resume with AI-Assisted Tools: Customize, Optimize, and
        <br />
        Stand Out in the Job Market.
      </motion.p>

      {/* Button to Resume Builder Page */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <Link href="/build-resume">
          <Button className="py-3 px-6 rounded text-sm">
           Build Your Resume
          </Button>
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 sm:mt-20 p-2 bg-white bg-opacity-60 rounded-3xl shadow-6xl relative overflow-hidden backdrop-filter backdrop-blur-3xl"
        style={{
          boxShadow: "0 0 50px 2px rgba(255, 255, 255, 0.6)",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-30 filter blur-3xl"></div>
        <video
          src="https://videos.pexels.com/video-files/9669049/9669049-hd_1920_1080_25fps.mp4"
          width={1200}
          height={600}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl relative z-10 w-full h-auto object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-charcoal-black text-base sm:text-lg mt-6"
      >
        Harnessing AI-powered resume analysis to transform your professional experience into
        a compelling narrative, boosting your chances of landing your dream job.
      </motion.p>
    </main>
  );
};

export default Hero;