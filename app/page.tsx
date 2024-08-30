"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {

  return (
    <div className="">
      <Hero />
      <SectionHeading title="How it works" description="Our AI-powered platform is designed to create tailored, ATS-optimized resumes in minutes. Here's how it works:" />
      <Features />
    </div>
  );
}