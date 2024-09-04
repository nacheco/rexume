import React, { useState } from 'react';

const WorkExperience = ({
  workExperiences,
  fields,
  handleWorkExperienceChange,
  addWorkExperience
}) => {
 
  const [isCheckedArray, setIsCheckedArray] = useState(
    workExperiences.map(() => false) 
  );


  const handleCheckboxChange = (index) => {
    const updatedIsCheckedArray = [...isCheckedArray];
    updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];
    setIsCheckedArray(updatedIsCheckedArray);
    handleWorkExperienceChange(
      index,
      "endDate",
      ""
    )
  };

  return (
    <div>
      {/* Step 2: Work Experience Fields */}
      <h1 className="text-2xl">Work Experience</h1>
      {workExperiences.length &&
        workExperiences.map((experience, index) => (
          <div key={index} className="w-[40vw] p-4 my-4">
            <h2>Work Experience {index + 1}</h2>
            <label>
              <input
                type="checkbox"
                checked={isCheckedArray[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              I currently work here
            </label>
            {fields.map((field) => (
              <div key={field.name} className="my-2">
                {/* Render all fields except "Description" and "End Date" */}
                {field.name !== "Description" && field.name !== "End Date" && (
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
                )}

                {/* Conditional rendering for the "End Date" field */}
                {field.name === "End Date" && !isCheckedArray[index] && (
                  <input
                    className="w-[100%]"

                    placeholder={field.placeholder}
                    value={experience.endDate || ""}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "endDate",
                        e.target.value
                      )
                    }
                  />
                )}

                {/* Textarea for "Description" field */}
                {field.name === "Description" && (
                  <textarea
                    className="w-[100%]"
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
                )}
              </div>
            ))}
          </div>
        ))}


      <button
        onClick={addWorkExperience}
        className="my-4 bg-black text-white px-4 py-2 rounded"
      >
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
