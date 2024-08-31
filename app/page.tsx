"use client";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SectionHeading from "@/components/SectionHeading";
import TemplatesList from "@/components/TemplatesList";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="mx-4 sm:mx-8 lg:mx-16 xl:mx-36 relative">
      <div 
        className="absolute inset-0 bg-secondary/30 rounded-full filter blur-3xl"
        style={{
          width: '20%',
          height: '10%',
          top: '2%',
          left: '60%',
          zIndex: -1,
        }}
      />
      <Hero />
      <SectionHeading 
        title="Create Your Resume in 4 Easy Steps" 
        description="Our free, no-strings-attached platform lets you build a professional resume in minutes. Here's how:" 
      />
      <Features />
      <SectionHeading 
        title="One Template, Endless Opportunities" 
        description="Skip the template overload. Our single, expertly crafted resume design is attractive, readable, and fully customizable. Get more interviews with less effort."
      />
      <div className="container mx-auto rounded-3xl px-4 sm:px-6 lg:px-8 bg-dark">
        <TemplatesList />
      </div>
      <div className="my-8 sm:my-12 lg:my-16 container mx-auto rounded-3xl px-4 sm:px-6 lg:px-8 bg-dark">
        <CTA />
      </div>  
    </main>
  );
}