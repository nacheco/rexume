"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepForm from "@/components/ResumeBuilder/StepForm";
import { Props } from "@/types/props";
import ResumeTemplate from "@/components/ResumeTemplate";

const ResumeBuilder = () => {
  const [step, setStep] = useState(0);
  const [aboutMe, setAboutMe] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    additionalinformation: "",
    other: "",
  });
  const [skills, setSkills] = useState([
    {
      description: "",
    },
  ]);
  const [workExperiences, setWorkExperiences] = useState([
    { employer: "", jobtitle: "", startdate: "", enddate: "", description: "" },
  ]);
  const [educationHistory, setEducationHistory] = useState([
    {
      school: "",
      degree: "",
      fieldofstudy: "",
      startdate: "",
      enddate: "",
      description: "",
    },
  ]);
  const [more, setMore] = useState([{ sectionName: "", sectionDetails: "" }]);
  // Load data from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAboutMe(parsedData.aboutMe || {});
      setWorkExperiences(parsedData.workExperiences || []);
      setEducationHistory(parsedData.educationHistory || []);
      setSkills(parsedData.skills || []);
      setMore(parsedData.skills || []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "resumeData",
      JSON.stringify({
        aboutMe,
        workExperiences,
        educationHistory,
        skills,
        more,
      })
    );
  }, [aboutMe, workExperiences, educationHistory, skills, more]);

  const handleAboutMeChange = (key: string, value: string) => {
    setAboutMe((prev) => ({ ...prev, [key]: value }));
  };

  const handleWorkExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedExperiences = workExperiences.map((experience, i: number) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setWorkExperiences(updatedExperiences);
  };
  const handleEducationHistoryChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedEducationHistory = educationHistory.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducationHistory(updatedEducationHistory);
  };
  const handleSkillChange = (index: number, field: string, value: string) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [field]: value } : skill
    );
    setSkills(updatedSkills);
  };
  const handleMoreSectionChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedMoreSection = more.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setMore(updatedMoreSection);
  };

  // Add a new work experience
  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        employer: "",
        jobtitle: "",
        startdate: "",
        enddate: "",
        description: "",
      },
    ]);
  };
  const addEducationHistory = () => {
    setEducationHistory([
      ...educationHistory,
      {
        school: "",
        degree: "",
        fieldofstudy: "",
        startdate: "",
        enddate: "",
        description: "",
      },
    ]);
  };
  const addSkill = () => {
    setSkills([...skills, { description: "" }]);
  };
  const addMore = () => {
    setMore([...more, { sectionName: "", sectionDetails: "" }]);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Fields for each step
  const steps = [
    {
      step: 1,
      fields: [
        { name: "Name", type: "text", placeholder: "Enter your name" },
        {
          name: "Title",
          type: "title",
          placeholder: "Enter your title: software engineer...",
        },
        {
          name: "Phone Number",
          type: "phone",
          placeholder: "Enter your phone number",
        },
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
          name: "Additional Information",
          type: "other1",
          placeholder: "Enter more links such as github profile...",
        },
        {
          name: "Other",
          type: "other2",
          placeholder: "Enter more links such as portfolio site...",
        },
      ],
    },
    {
      step: 2,
      fields: [
        {
          name: "Employer",
          type: "text",
          placeholder: "Enter your Employer Name",
        },
        {
          name: "Job Title",
          type: "text",
          placeholder: "Enter your Job Title",
        },
        {
          name: "Start Date",
          type: "text",
          placeholder: "Enter the job start date",
        },
        {
          name: "End Date",
          type: "text",
          placeholder: "Enter the job end date",
        },
        {
          name: "Description",
          type: "text",
          placeholder:
            "Describe your work experience, separating bullet points by period",
        },
      ],
    },
    {
      step: 3,
      fields: [
        {
          name: "School",
          type: "text",
          placeholder: "Enter your School Name",
        },
        {
          name: "Degree",
          type: "text",
          placeholder: "Enter your Degree",
        },
        {
          name: "Field of Study",
          type: "text",
          placeholder: "Enter your field of study",
        },
        {
          name: "Start Date",
          type: "text",
          placeholder: "Enter school start date",
        },
        {
          name: "End Date",
          type: "text",
          placeholder: "Enter school end date",
        },
        {
          name: "Description",
          type: "text",
          placeholder:
            "Describe your educational experience, separating bullet points by period",
        },
      ],
    },
    {
      step: 4,
      fields: [
        {
          name: "Description",
          type: "text",
          placeholder: "Add a Skill",
        },
      ],
    },
    {
      step: 5,
      fields: [
        {
          name: "sectionName",
          type: "text",
          placeholder: "For example, Awards",
        },
        {
          name: "sectionDetails",
          type: "text",
          placeholder: "For example, I won abc awards during an event",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto my-50 w-[90vw] flex justify-center min-h-[fit-content]">
      <AnimatePresence mode="wait">
        <>
          <ResumeTemplate
            aboutMe={aboutMe}
            skills={skills}
            workExperiences={workExperiences}
            educationHistory={educationHistory}
            more={more}
          />
          {steps.map(
            (stepInfo, index) =>
              step === index && (
                <StepForm
                  key={`step${index}`}
                  step={stepInfo.step}
                  fields={stepInfo.fields}
                  aboutMe={aboutMe}
                  handleAboutMeChange={handleAboutMeChange}
                  workExperiences={workExperiences}
                  handleWorkExperienceChange={handleWorkExperienceChange}
                  addWorkExperience={addWorkExperience}
                  educationHistory={educationHistory}
                  handleEducationHistoryChange={handleEducationHistoryChange}
                  addEducationHistory={addEducationHistory}
                  skills={skills}
                  handleSkillChange={handleSkillChange}
                  addSkill={addSkill}
                  more={more}
                  handleMoreSectionChange={handleMoreSectionChange}
                  addMore={addMore}
                  prevStep={index > 0 ? prevStep : null}
                  nextStep={index < steps.length - 1 ? nextStep : null}
                />
              )
          )}
        </>
      </AnimatePresence>
    </div>
  );
};

export default ResumeBuilder;
