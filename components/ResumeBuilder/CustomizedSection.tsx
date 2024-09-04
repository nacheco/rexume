import React from 'react';

const CustomizedSection = ({ more, fields, handleMoreSectionChange, addMore }) => {
  return (
    <div>
      {/* Step 5: Customized Section Fields */}
      <h1 className="text-2xl">Add Customized Section</h1>
      {more.length > 0 &&
        more.map((section, index) => (
          <div key={index} className="w-[40vw] p-4 my-4">
            <h2>Customized Section {index + 1}</h2>
            {fields.map((field) => (
              <div key={field.name} className="my-2">
                <input
                  className="w-[100%]"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={section[field.name.toLowerCase().replace(" ", "")] || ""}
                  onChange={(e) =>
                    handleMoreSectionChange(
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

      {/* Button to Add More Customized Sections */}
      <button
        onClick={addMore}
        className="my-4 bg-black text-white px-4 py-2 rounded"
      >
        Add Customized Section
      </button>
    </div>
  );
};

export default CustomizedSection;
