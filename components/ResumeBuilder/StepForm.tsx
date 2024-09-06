"use client";
import { Props } from "@/types/props";
import { motion } from "framer-motion";
import { useState } from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skill from "./Skill";
import CustomizedSection from "./CustomizedSection";

const StepForm: React.FC<Props> = ({
  step,
  fields,

  aboutMe,
  handleAboutMeChange,

  workExperiences,
  addWorkExperience,
  handleWorkExperienceChange,

  educationHistory,
  handleEducationHistoryChange,
  addEducationHistory,

  skills,
  handleSkillChange,
  addSkill,

  more,
  handleMoreSectionChange,
  addMore,

  prevStep,
  nextStep,
  handlePrint
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <motion.div
      className="flex flex-col items-center w-[100vw]"
      key={`step${step}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {/* Step 1: Basic Information Fields */}
      {step === 1 && <h1 className="text-2xl">About You</h1>}
      {step === 1 &&
        fields.length &&
        fields.map((field) => (
          <div key={field?.name} className="w-[40vw] ">
            <h2>{field?.name}</h2>
            <input
              className="w-[100%] mb-4 mt-1"
              type={field?.type}
              placeholder={field.placeholder}
              value={aboutMe[field?.name.toLowerCase().replace(" ", "")] || ""}
              onChange={(e) =>
                handleAboutMeChange(
                  field.name.toLowerCase().replace(" ", ""),
                  e.target.value
                )
              }
            />
          </div>
        ))}

      {/* Step 2: Work Experience Fields */}
      {step === 2 && (
        <WorkExperience
          workExperiences={workExperiences}
          fields={fields}
          handleWorkExperienceChange={handleWorkExperienceChange}
          addWorkExperience={addWorkExperience}
        />
      )}

      {/* Step 3: Education History Fields */}
      {step === 3 && (
        <Education
          educationHistory={educationHistory}
          fields={fields}
          handleEducationHistoryChange={handleEducationHistoryChange}
          addEducationHistory={addEducationHistory}
        />
      )}
     
      {/* Step 4: Skill Fields */}
      {step === 4 && (
        <Skill
          skills={skills}
          fields={fields}
          handleSkillChange={handleSkillChange}
          addSkill={addSkill}
        />
      )}
      {/* Step 5: Add More Fields */}
      {step === 5 && (
        <CustomizedSection
          more={more}
          fields={fields}
          handleMoreSectionChange={handleMoreSectionChange}
          addMore={addMore}
        />
      )}

      {/* Navigation Buttons */}
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
          <>
            <button
            onClick={handlePrint}
              type="submit"
              className="bg-[#FB8C3E] text-white px-4 py-2 rounded"
            >
              Generate Resume
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default StepForm;
