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
  rating: number;
  imageSrc: string;
  isAtsFriendly: boolean;
}

const templates: Template[] = [
  {
    id: 1,
    name: 'Quick Resume Template',
    rating: 4.9,
    imageSrc: 'https://images.pexels.com/photos/11213182/pexels-photo-11213182.jpeg',
    isAtsFriendly: true,
  },
  {
    id: 2,
    name: 'Instant CV Builder',
    rating: 4.9,
    imageSrc: 'https://images.pexels.com/photos/11213182/pexels-photo-11213182.jpeg',
    isAtsFriendly: true,
  },
  {
    id: 3,
    name: '5-Minute Resume',
    rating: 4.8,
    imageSrc: 'https://images.pexels.com/photos/11213182/pexels-photo-11213182.jpeg',
    isAtsFriendly: true,
  },
  {
    id: 4,
    name: 'Express Resume Maker',
    rating: 4.8,
    imageSrc: 'https://images.pexels.com/photos/11213182/pexels-photo-11213182.jpeg',
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
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:cursor-pointer mx-2">
                  <Image
                    src={template.imageSrc}
                    alt={template.name}
                    width={600}
                    height={849}
                    layout="responsive"
                    className="object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{template.name}</h3>
                    <div className="flex items-center mt-3">
                      <span className="text-yellow-400 mr-2 text-lg">★</span>
                      <span className="text-lg">{template.rating}</span>
                    </div>
                    {template.isAtsFriendly && (
                      <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mt-3">
                        ATS-FRIENDLY
                      </span>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ResumeTemplates;