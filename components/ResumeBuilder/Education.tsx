import React, { useState } from 'react';

const Education = ({
  educationHistory,
  fields,
  handleEducationHistoryChange,
  addEducationHistory,
}) => {
    const [isCheckedArray, setIsCheckedArray] = useState(
        educationHistory.map(() => false) 
      );
    
    
      const handleCheckboxChange = (index) => {
        const updatedIsCheckedArray = [...isCheckedArray];
        updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];
        setIsCheckedArray(updatedIsCheckedArray);
        handleEducationHistoryChange(
          index,
          "endDate",
          ""
        )
      };
  return (
    <div>
      {/* Step 3: Education Fields */}
      <h1 className="text-2xl">Education</h1>
      {educationHistory.map((edu, index) => (
        <div key={index} className="w-[40vw] p-4 my-4">
          <h2>Education {index + 1}</h2>
          <label>
              <input
                type="checkbox"
                checked={isCheckedArray[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              I currently study here
            </label>
          {fields.map((field) => (
            <div key={field.name} className="my-2">
              {/* Render input fields for all fields except "Description" */}
              {field.name !== "Description" && field.name !== "End Date" && (
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
              )}
{field.name === "End Date" && !isCheckedArray[index] && (
                  <input
                    className="w-[100%]"
               
                    placeholder={field.placeholder}
                    value={edu.endDate || ""}
                    onChange={(e) =>
                      handleEducationHistoryChange(
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
                  value={edu[field.name.toLowerCase().replace(" ", "")] || ""}
                  onChange={(e) =>
                    handleEducationHistoryChange(
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
        onClick={addEducationHistory}
        className="my-4 bg-black text-white px-4 py-2 rounded"
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;
