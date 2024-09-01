"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addToWaitlist } from "@/lib/waitlist";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await addToWaitlist(name, email);
      console.log("Waitlist result:", result);
      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "Success!",
          description: "You've been added to the waitlist.",
          duration: 5000,
        });
      } else if (result.error === 'already-exists') {
        console.log("User already exists, showing toast");
        toast({
          title: "Already on waitlist",
          description: "This email is already registered on the waitlist.",
          variant: "default",
          duration: 5000,
        });
      } else {
        toast({
          title: "Error",
          description: "An unknown error occurred. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.footer
      className="bg-orange-white font-poppins"
      id="footer"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div className="text-center lg:text-left" variants={itemVariants}>
            <motion.h1 
              className="font-gilda text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-4 text-dark tracking-tight"
              variants={itemVariants}
            >
              Stay tuned for
              <br />
              our upcoming
              <br />
              full launch
            </motion.h1>
            <motion.p 
              className="text-dark text-base sm:text-lg lg:text-xl mt-4 tracking-tight"
              variants={itemVariants}
            >
              Subscribe to not miss out on any news!
            </motion.p>
            <motion.p 
              className="text-sm mt-2 tracking-tight text-secondary/80"
              variants={itemVariants}
            >
           This waitlist is temporary and it&apos;s only purpose is to notify you when we launch.
            </motion.p>
          </motion.div>
          <motion.div className="flex justify-center items-center" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <motion.input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                className="w-full px-4 py-2 rounded-md border border-gray-100 focus:outline-none focus:ring focus:border-deep-orange focus:ring-deep-orange text-dark"
                variants={itemVariants}
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSuccess}
                required
              />
              
              <motion.input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2 rounded-md border border-gray-100 focus:outline-none focus:ring focus:border-deep-orange focus:ring-deep-orange mt-4 text-dark"
                variants={itemVariants}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSuccess}
                required
              />
              
              <motion.div className="flex items-center mt-4" variants={itemVariants}>
                <input type="checkbox" id="privacy-policy" name="privacy-policy" className="form-checkbox text-yellow-500 border-gray-100 rounded" required />
                <label htmlFor="privacy-policy" className="ml-2 text-dark text-sm">I have read and agree to the <a href="/privacy" className="underline">Privacy Policy</a></label>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  className={`w-full mt-6 ${isSuccess ? 'bg-green-500 hover:bg-green-600' : ''}`}
                  variant={isSuccess ? "secondary" : "default"}
                  disabled={isLoading || isSuccess}
                >
                  {isLoading ? "Joining..." : isSuccess ? "Added to waitlist!" : "Join waitlist"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        <motion.nav 
          className="flex flex-col sm:flex-row justify-between text-dark mt-8 sm:mt-12 space-y-4 sm:space-y-0"
          variants={itemVariants}
        >
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">Instagram</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#" className="hover:underline">TikTok</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="/privacy" className="hover:underline">Privacy policy</a></motion.li>
          </ul>
          <motion.p variants={itemVariants} className="text-center sm:text-right">&copy; Rexume 2024</motion.p>
        </motion.nav>
      </div>
    </motion.footer>
  );
};
export default Footer;