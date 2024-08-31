import React from 'react';
import { FaLock, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <div className="bg-dark text-main p-4 sm:p-6 md:p-8 rounded-3xl">
      <h2 className="font-gilda text-3xl sm:text-4xl md:text-5xl text-center mb-4">Create Your Perfect Resume Now - It's Free!</h2>
      <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">No sign-up, no credit card, no strings attached. Get your professional resume in just 5 minutes!</p>
      
      <div className="flex justify-center mb-6 sm:mb-8">
        <button disabled className="bg-dark py-2 sm:py-3 px-4 sm:px-6 rounded-xl text-xs sm:text-sm transition duration-300 border opacity-50 cursor-not-allowed">
          Coming Soon!
        </button>
      </div>
      
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 sm:gap-6">
        <PrivacyFeature 
          icon={<FaLock />}
          title="We Don't Store Your Data"
          description="Only you can access information that you've saved."
        />
        <PrivacyFeature 
          icon={<FaShieldAlt />}
          title="We Have Strict Access Controls"
          description="Your data is protected with industry-standard security measures."
        />
        <PrivacyFeature 
          icon={<FaUserSecret />}
          title="We're Transparent About Privacy Policy"
          description="We clearly outline how your information is used and protected in our privacy policy."
        />
      </div>
    </div>
  );
};

interface PrivacyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrivacyFeature: React.FC<PrivacyFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#2D2F33] p-4 sm:p-6 rounded-xl flex flex-col h-full">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-main">{icon}</div>
      <h3 className="font-gilda text-lg sm:text-xl mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-main/70 flex-grow">{description}</p>
    </div>
  );
};

export default CTA;