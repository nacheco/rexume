import React, { ReactNode } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  mediaContent: string | ReactNode;
  isVideo?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  mediaContent, 
  isVideo = false, 
  backgroundColor, 
  titleColor, 
  descriptionColor 
}) => {
  return (
    <div className="container min-h-[40vh] sm:min-h-[50vh] mx-auto py-10 flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor }}>
      <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
        <h2 className={`font-gilda text-3xl sm:text-4xl lg:text-5xl mb-4`} style={{ color: titleColor }}>{title}</h2>
        <p className="max-w-sm text-sm sm:text-md" style={{ color: descriptionColor }}>{description}</p>
      </div>
      <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden relative">
        {isVideo ? (
          <video
            src={mediaContent as string}
            className="w-full h-full object-contain rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          typeof mediaContent === 'string' ? (
            <div className="relative w-full h-full">
              <Image
                src={mediaContent}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            mediaContent
          )
        )}
      </div>
    </div>
  );
};

export default FeatureCard;