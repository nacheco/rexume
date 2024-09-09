import React from 'react';

interface SkillProps {
  skills: Array<{ description: string }>;
  fields: Array<{ name: string; type: string; placeholder: string }>;
  handleSkillChange: (index: number, field: string, value: string) => void;
  addSkill: () => void;
}

const Skill: React.FC<SkillProps> = ({ skills, fields, handleSkillChange, addSkill }) => {
  return (
    <div>
      {/* Step 4: Skills Fields */}
      <h1 className="text-2xl">Skills</h1>
      {skills.length > 0 &&
        skills.map((skill, index) => (
          <div key={index} className="w-[40vw] p-4 my-4">
            <h2>Skill {index + 1}</h2>
            {fields.map((field) => (
              <div key={field.name} className="my-2">
                <input
                  className="w-[100%]"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={skill[field.name.toLowerCase().replace(" ", "") as keyof typeof skill] || ""}
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

    
      <button
        onClick={addSkill}
        className="my-4 bg-black text-white px-4 py-2 rounded"
      >
        Add Skill
      </button>
    </div>
  );
};

export default Skill;
