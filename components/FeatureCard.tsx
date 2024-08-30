import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  mediaOnRight: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, mediaOnRight }) => {
  return (
    <div className={`mx-10 mb-10 min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh] bg-dark rounded-2xl overflow-hidden border-[8px] border-[#FFD8EA] shadow-[0_0_15px_rgba(255,216,234,0.3)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,216,234,0.5)]`}>
      <div className={`flex flex-col ${mediaOnRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 sm:p-6 md:p-8">
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-left mb-4">
            {title}
          </h3>
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light text-left mt-2">
            {description}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="rounded-2xl sm:rounded-3xl w-full lg:w-[90%] aspect-video flex items-center justify-center relative overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl sm:rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;