import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4 py-8 md:py-16"
    >
      <h2 className="font-gilda text-4xl md:text-5xl text-center text-charcoal-black mb-6">
        {title}
      </h2>
      <p className="text-md text-center text-dark/70 max-w-xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeading;