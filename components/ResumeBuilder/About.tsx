import React from 'react';
import { Field } from '@/types/props';

interface AboutMeProps {
  aboutMe: Record<string, string>;
  fields: Field[];
  handleAboutMeChange: (key: string, value: string) => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ aboutMe, fields, handleAboutMeChange }) => {
  const renderField = (field: Field, isFullWidth: boolean = false) => (
    <div key={field.name} className={`mb-4 ${isFullWidth ? 'col-span-2' : ''}`}>
      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
        {field.name}
      </label>
      <input
        id={field.name}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type={field.type}
        placeholder={field.placeholder}
        value={aboutMe[field.name.toLowerCase().replace(" ", "")] || ""}
        onChange={(e) => handleAboutMeChange(field.name.toLowerCase().replace(" ", ""), e.target.value)}
      />
    </div>
  );

  return (
    <form className="w-[90%] mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">About Me</h1>
      <div className="space-y-4">
        {fields.map((field) => 
          ['Name', 'Title', 'Additional Information'].includes(field.name) && renderField(field, true)
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {fields.map((field) => 
          !['Name', 'Title', 'Additional Information'].includes(field.name) && renderField(field)
        )}
      </div>
    </form>
  );
};

export default AboutMe;