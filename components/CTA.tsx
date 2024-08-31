import React from 'react';
import { FaLock, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <div className="bg-dark text-main p-8 rounded-3xl">
      <h2 className="font-gilda text-4xl md:text-5xl text-center mb-4">Create Your Perfect Resume Now - It's Free!</h2>
      <p className="text-center mb-8">No sign-up, no credit card, no strings attached. Get your professional resume in just 5 minutes!</p>
      
      <div className="flex justify-center mb-8">
        <Link href="/create-resume" className="bg-dark py-3 px-6 rounded-xl text-sm transition duration-300 border">
          Coming Soon!
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <div className="bg-[#2D2F33] p-6 rounded-xl">
      <div className="text-4xl mb-4 text-main">{icon}</div>
      <h3 className="font-gilda text-xl mb-2">{title}</h3>
      <p className="text-sm text-main/70">{description}</p>
    </div>
  );
};

export default CTA;