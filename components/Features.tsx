import FeatureCard from '@/components/FeatureCard';
import Image from 'next/image';

const featureData = [
  {
    title: "Lightning-Fast Resume Creation",
    description: "Build a professional resume in just 5 minutes with our intuitive interface.",
    mediaContent: "/images/doodle-1.png",
    isVideo: false,
    backgroundColor: "#1A1A1A",
    titleColor: "#FB8C3E",
    descriptionColor: "#FFF7ED"
  },
  {
    title: "No Sign-Up Required",
    description: "Start creating your resume instantly - no account creation or personal information needed.",
    mediaContent: "/images/doodle-2.png",
    isVideo: false,
    backgroundColor: "#333333",
    titleColor: "#FB8C3E",
    descriptionColor: "#FFF7ED"
  },
  {
    title: "100% Free, No Hidden Costs",
    description: "Enjoy all features without any payment or credit card information - it's completely free.",
    mediaContent: "/images/doodle-3.png",
    isVideo: false,
    backgroundColor: "#4D4D4D",
    titleColor: "#FB8C3E",
    descriptionColor: "#FFF7ED"
  },
  {
    title: "Instant Download",
    description: "Get your polished resume immediately - download as PDF or share online with a single click.",
    mediaContent: "/images/doodle-4.png",
    isVideo: false,
    backgroundColor: "#1A1A1A",
    titleColor: "#FB8C3E",
    descriptionColor: "#FFF7ED"
  },
];

const Features: React.FC = () => {
  return (
    <section className="space-y-16">
      {featureData.map((feature, index) => (
        <div 
          key={index}
          className="sticky top-0"
        >
          <FeatureCard
            title={feature.title}
            description={feature.description}
            mediaContent={feature.mediaContent}
            isVideo={feature.isVideo}
            backgroundColor={feature.backgroundColor}
            titleColor={feature.titleColor}
            descriptionColor={feature.descriptionColor}
          />
        </div>
      ))}
    </section>
  );
};

export default Features;
