"use client"
import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Template {
  id: number;
  name: string;
  imageSrc: string;
  isAtsFriendly: boolean;
}

const templates: Template[] = [
  {
    id: 1,
    name: 'Simple but effective',
    imageSrc: '/images/resume-template-1.png',
    isAtsFriendly: true,
  },
  {
    id: 2,
    name: 'Modern',
    imageSrc: '/images/resume-template-1.png',
    isAtsFriendly: true,
  },
  {
    id: 3,
    name: 'Minimalist',
    imageSrc: '/images/resume-template-1.png',
    isAtsFriendly: true,
  },
];

const ResumeTemplates: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 3,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {templates.map((template) => (
              <CarouselItem key={template.id} className="basis-1/3">
                <div className="relative overflow-hidden rounded-lg mx-2 group transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(var(--secondary-rgb),0.5)]">
                  <Image
                    src={template.imageSrc}
                    alt={template.name}
                    width={500}
                    height={707}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">{template.name}</h3>
                  </div>
                  {template.isAtsFriendly && (
                    <span className="absolute top-2 right-2 bg-slate-100/50 text-white text-sm px-3 py-1 rounded-full">
                      ATS-FRIENDLY
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {templates.length > 3 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default ResumeTemplates;