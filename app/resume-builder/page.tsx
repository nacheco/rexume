"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepForm from "@/components/StepForm";


const ResumeBuilder = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Load data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (key, value) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);

    // Save to localStorage
    localStorage.setItem("resumeData", JSON.stringify(updatedData));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Fields for each step
  const steps = [
    {
      step: 1,
      fields: [{ name: "Name", type: "text", placeholder: "Enter your name" },
        { name: "Title", type: "title", placeholder: "Enter your title: software engineer..." },
        { name: "Phone Number", type: "phone", placeholder: "Enter your phone number" },
        { name: "Email", type: "email", placeholder: "Enter your email" },
        {
            name: "Location",
            type: "location",
            placeholder: "Enter the link to your location",
          },
          {
            name: "LinkedIn",
            type: "linkedin",
            placeholder: "Enter the link to your LinkedIn page",
          },
          {
            name: "Other Social Media Link",
            type: "other1",
            placeholder: "Enter more links such as github profile...",
          },
          {
            name: "Other Social Media Link",
            type: "other2",
            placeholder: "Enter more links such as portfolio profile...",
          },
      ],
    },
    {
      step: 2,
      fields: [{ name: "Employer", type: "text", placeholder: "Enter your Employer Name" },
      { name: "Job Title", type: "text", placeholder: "Enter your Job Title" },
      { name: "Start Date", type: "text", placeholder: "Enter the job start date" },
      { name: "End Date", type: "text", placeholder: "Enter the job end date" },
      { name: "Description", type: "text", placeholder: "Describe your work experience" },
        
      ],
    },
  

  ];

  return (
    <div className="mx-auto my-50 w-[90vw] flex justify-center h-[80vh]" >
      <AnimatePresence mode="wait">
        {steps.map(
          (stepInfo, index) =>
            step === index && (
              <StepForm
                key={`step${index}`}
                step={stepInfo.step}
                fields={stepInfo.fields}
                formData={formData}
                handleChange={handleChange}
                prevStep={index > 0 ? prevStep : null}
                nextStep={index < steps.length - 1 ? nextStep : null}
              />
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeBuilder;
