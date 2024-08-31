import React from 'react';
import Image from 'next/image';

interface CaptureCardProps {
  title: string;
  description: string;
  mediaContent: string;
  isVideo?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const CaptureCard: React.FC<CaptureCardProps> = ({ 
  title, 
  description, 
  mediaContent, 
  isVideo = false, 
  backgroundColor, 
  titleColor, 
  descriptionColor 
}) => {
  return (
    <div className="container h-[50vh] mx-auto flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor }}>
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <h2 className={`font-gilda text-5xl mb-4`} style={{ color: titleColor }}>{title}</h2>
        <p className="max-w-sm text-md" style={{ color: descriptionColor }}>{description}</p>
      </div>
      <div className="w-full lg:w-1/2 p-8 overflow-hidden">
        {isVideo ? (
          <video
            src={mediaContent}
            className="w-full h-full object-cover rounded-3xl"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={mediaContent}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};

export default CaptureCard;