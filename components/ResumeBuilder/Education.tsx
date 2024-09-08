import React, { useState } from "react";

interface EducationProps {
  educationHistory: Array<{
    school: string;
    degree: string;
    field: string;
    startdate: string;
    enddate: string;
    description: string;
  }>;
  fields: Array<{
    name: string;
    type: string;
    placeholder: string;
  }>;
  handleEducationHistoryChange: (index: number, field: string, value: string) => void;
  addEducationHistory: () => void;
}

const Education: React.FC<EducationProps> = ({
  educationHistory,
  fields,
  handleEducationHistoryChange,
  addEducationHistory,
}) => {
  const [isCheckedArray, setIsCheckedArray] = useState<boolean[]>(
    educationHistory.map(() => false)
  );

  const handleCheckboxChange = (index: number) => {
    const updatedIsCheckedArray = [...isCheckedArray];
    updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];
    setIsCheckedArray(updatedIsCheckedArray);
    handleEducationHistoryChange(index, "enddate", "");
  };

  return (
    <div>
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
              {field.name !== "Description" && field.name !== "End Date" && (
                <input
                  className="w-[100%]"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={edu[field.name.toLowerCase().replace(" ", "") as keyof typeof edu] || ""}
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
                  value={edu[field.name.toLowerCase().replace(" ", "") as keyof typeof edu] || ""}
                  onChange={(e) =>
                    handleEducationHistoryChange(
                      index,
                      "enddate",
                      e.target.value
                    )
                  }
                />
              )}
              {field.name === "Description" && (
                <textarea
                  className="w-[100%]"
                  placeholder={field.placeholder}
                  value={edu[field.name.toLowerCase().replace(" ", "") as keyof typeof edu] || ""}
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
