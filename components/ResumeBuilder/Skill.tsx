import React, { useState } from 'react';

const Skill = ({ skills, handleSkillChange, addSkill, removeSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full">
      <h1 className="text-3xl font-bold my-6 text-center">Skills</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 rounded-full px-3 py-1 flex items-center">
            <span>{skill.description}</span>
            <button
              onClick={() => removeSkill(index)}
              className="ml-2 text-red-500 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex max-w-xs w-full">
          <input
            className="flex-grow px-3 py-1 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Add a skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold py-1 px-4 rounded-r-md hover:bg-gray-800 transition duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Skill;