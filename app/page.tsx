"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SectionHeading from "@/components/SectionHeading";
import TemplatesList from "@/components/TemplatesList";
import CTA from "@/components/CTA";

export default function Home() {

  return (
    <>
      <Hero />
      <SectionHeading title="Create Your Resume in 4 Easy Steps" description="Our free, no-strings-attached platform lets you build a professional resume in minutes. Here's how:" />
      <Features />
      <SectionHeading 
        title="Unlock Your Career Potential" 
        description="Explore our diverse range of professionally designed resume templates. Find the perfect style to showcase your unique skills and experience."
      />
      <div className="container mx-auto rounded-3xl px-4 bg-dark">
        <TemplatesList />
      </div>
      <div className="my-16 container mx-auto rounded-3xl px-4 bg-dark">
        <CTA />
      </div>  
    </>
  );
}