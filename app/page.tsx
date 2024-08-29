"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {

  return (
    <div className="bg-orange-white text-charcoal-black font-sans min-h-screen overflow-hidden relative">
      <Hero />
      <SectionHeading title="How it works" description="Our platform is designed to help you learn and retain information more effectively. Here's how it works:" />
      <Features />
    </div>
  );
}