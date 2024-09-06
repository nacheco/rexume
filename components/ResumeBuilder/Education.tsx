import React, { useState } from 'react';

interface EducationProps {
  educationHistory: any[];
  fields: any[];
  handleEducationHistoryChange: (index: number, field: string, value: string) => void;
  addEducationHistory: () => void;
  removeEducationHistory: (index: number) => void; // Add this line
}

const Education: React.FC<EducationProps> = ({
  educationHistory,
  fields,
  handleEducationHistoryChange,
  addEducationHistory,
  removeEducationHistory // Add this line
}) => {
  const [isCheckedArray, setIsCheckedArray] = useState<boolean[]>(
    educationHistory.map(() => false)
  );

  const handleCheckboxChange = (index: number) => {
    const updatedIsCheckedArray = [...isCheckedArray];
    updatedIsCheckedArray[index] = !updatedIsCheckedArray[index];
    setIsCheckedArray(updatedIsCheckedArray);
    handleEducationHistoryChange(index, "endDate", "");
  };

  return (
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-bold my-6 text-center">Education</h1>
      {educationHistory.map((edu, index) => (
        <div key={index} className="rounded-lg p-6 mb-6 relative">
          <h2 className="text-xl font-semibold mb-4">Education {index + 1}</h2>
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isCheckedArray[index]}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2"
            />
            <span className="text-sm">I currently study here</span>
          </label>
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              {field.name !== "Description" && field.name !== "End Date" && (
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              {field.name === "Description" && (
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
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
          {educationHistory.length > 1 && (
            <button
              onClick={() => removeEducationHistory(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addEducationHistory}
        className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;
