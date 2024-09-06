"use client";
import { Props } from "@/types/props";
import { motion } from "framer-motion";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skill from "./Skill";
import CustomizedSection from "./CustomizedSection";
import AboutMe from "./About";

const StepForm: React.FC<Props> = ({
  step,
  fields,
  aboutMe,
  handleAboutMeChange,
  workExperiences,
  addWorkExperience,
  handleWorkExperienceChange,
  removeWorkExperience,
  educationHistory,
  handleEducationHistoryChange,
  addEducationHistory,
  removeEducationHistory,
  skills,
  handleSkillChange,
  addSkill,
  removeSkill,
  more,
  handleMoreSectionChange,
  addMore,
  prevStep,
  nextStep,
  removeMore, // Add this prop
}) => {
  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center w-full"
      key={`step${step}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {step === 1 && (
        <AboutMe
          aboutMe={aboutMe}
          fields={fields}
          handleAboutMeChange={handleAboutMeChange}
        />
      )}
      {step === 2 && (
        <WorkExperience
          workExperiences={workExperiences}
          fields={fields}
          handleWorkExperienceChange={handleWorkExperienceChange}
          addWorkExperience={addWorkExperience}
          removeWorkExperience={removeWorkExperience}
        />
      )}
      {step === 3 && (
        <Education
          educationHistory={educationHistory}
          fields={fields}
          handleEducationHistoryChange={handleEducationHistoryChange}
          addEducationHistory={addEducationHistory}
          removeEducationHistory={removeEducationHistory}
        />
      )}
      {step === 4 && (
        <Skill
          skills={skills}
          handleSkillChange={handleSkillChange}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />
      )}
      {step === 5 && (
        <CustomizedSection
          more={more}
          fields={fields}
          handleMoreSectionChange={handleMoreSectionChange}
          addMore={addMore}
          removeMore={removeMore} // Add this prop
        />
      )}
      <div className="flex space-x-4 my-8">
        {prevStep && (
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {nextStep && (
          <button
            onClick={nextStep}
            className="bg-[#FB8C3E] text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
        {!nextStep && (
          <button
            type="submit"
            className="bg-[#FB8C3E] text-white px-4 py-2 rounded"
          >
            Generate Resume
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default StepForm;
