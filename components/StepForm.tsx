"use client";

import { motion } from "framer-motion";

const StepForm = ({
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

  prevStep,
  nextStep,
}) => {
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
            <h2 >{field?.name}</h2>
            <input
              className="w-[100%] mb-4 mt-1"
              type={field?.type}
              placeholder={field.placeholder}
              value={aboutMe[field?.name] || ""}
              onChange={(e) => handleAboutMeChange(field.name, e.target.value)}
            />
          </div>
        ))}

      {/* Step 2: Work Experience Fields */}
      {step === 2 && <h1 className="text-2xl">Work Experience</h1>}
      {step === 2 &&
        workExperiences.length &&
        workExperiences.map((experience, index) => (
          <div key={index} className="w-[40vw]  p-4 my-4">
            <h2>Work Experience {index + 1}</h2>
            {fields.map((field) => (
              <div key={field.name} className="my-2">
                <input
                  className="w-[100%]"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={
                    experience[field.name.toLowerCase().replace(" ", "")] || ""
                  }
                  onChange={(e) =>
                    handleWorkExperienceChange(
                      index,
                      field.name.toLowerCase().replace(" ", ""),
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}

      {/* Button to Add More Work Experience Sections */}
      {step === 2 && (
        <button
          onClick={addWorkExperience}
          className="my-4 bg-black text-white px-4 py-2 rounded"
        >
          Add Work Experience
        </button>
      )}

      {/* Step 3: Education History Fields */}
      {step === 3 && <h1 className="text-2xl">Education</h1>}
      {step === 3 &&
        educationHistory.map((edu, index) => (
          <div key={index} className="w-[40vw]  p-4 my-4">
            <h2>Education {index + 1}</h2>
            {fields.map((field) => (
              <div key={field.name} className="my-2">
                <input
                  className="w-[100%]"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={edu[field.name.toLowerCase().replace(" ", "")] || ""}
                  onChange={(e) =>
                    handleEducationHistoryChange(
                      index,
                      field.name.toLowerCase().replace(" ", ""),
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}

      {/* Button to Add More Education History Sections */}
      {step === 3 && (
        <button
          onClick={addEducationHistory}
          className="my-4 bg-black text-white px-4 py-2 rounded"
        >
          Add Education
        </button>
      )}
      {/* Step 4: Skill Fields */}
      {step === 4 && <h1 className="text-2xl">Skills</h1>}
      {step === 4 &&
        skills.length &&
        skills.map((skill, index) => (
          <div key={index} className="w-[40vw] p-4 my-4">
            <h2 >Skill {index + 1}</h2>
            {fields.length &&
              fields?.map((field) => (
                <div key={field.name} className="my-2">
                  <input
                    className="w-[100%]"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={
                      skill[field?.name?.toLowerCase().replace(" ", "")] || ""
                    }
                    onChange={(e) =>
                      handleSkillChange(
                        index,
                        field.name.toLowerCase().replace(" ", ""),
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
          </div>
        ))}

      {/* Button to Add More Education History Sections */}
      {step === 4 && (
        <button
          onClick={addSkill}
          className="my-4 bg-black text-white px-4 py-2 rounded"
        >
          Add Skill
        </button>
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
