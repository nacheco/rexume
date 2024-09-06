import React, { useState } from 'react';

interface WorkExperienceProps {
  workExperiences: any[];
  fields: any[];
  handleWorkExperienceChange: (index: number, field: string, value: string) => void;
  addWorkExperience: () => void;
  removeWorkExperience: (index: number) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  workExperiences,
  fields,
  handleWorkExperienceChange,
  addWorkExperience,
  removeWorkExperience
}) => {
 
  const [isCheckedArray, setIsCheckedArray] = useState<boolean[]>(
    workExperiences.map(() => false) 
  );

  const handleCheckboxChange = (index: number) => {
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
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-bold my-6 text-center">Work Experience</h1>
      {workExperiences.length > 0 &&
        workExperiences.map((experience, index) => (
          <div key={index} className="rounded-lg p-6 mb-6 relative">
            <h2 className="text-xl font-semibold mb-4">Work Experience {index + 1}</h2>
            {workExperiences.length > 1 && (
              <button
                onClick={() => removeWorkExperience(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={isCheckedArray[index]}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              <span className="text-sm">I currently work here</span>
            </label>
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                {field.name !== "Description" && field.name !== "End Date" && (
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={experience[field.name.toLowerCase().replace(" ", "")] || ""}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        field.name.toLowerCase().replace(" ", ""),
                        e.target.value
                      )
                    }
                  />
                )}

                {field.name === "End Date" && !isCheckedArray[index] && (
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                {field.name === "Description" && (
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                    placeholder={field.placeholder}
                    value={experience[field.name.toLowerCase().replace(" ", "")] || ""}
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
        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
      >
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
