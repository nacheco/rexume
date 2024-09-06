import React from 'react';

const CustomizedSection = ({ more, fields, handleMoreSectionChange, addMore, removeMore }) => {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-bold my-6 text-center">Add Customized Section</h1>
      {more.length > 0 &&
        more.map((section, index) => (
          <div key={index} className="rounded-lg p-6 mb-6 relative">
            <h2 className="text-xl font-semibold mb-4">Customized Section {index + 1}</h2>
            {more.length > 1 && (
              <button
                onClick={() => removeMore(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      <div className="flex justify-center">
        <button
          onClick={addMore}
          className="bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Add Customized Section
        </button>
      </div>
    </div>
  );
};

export default CustomizedSection;
