// Resume.tsx

import React, { forwardRef } from "react";

interface WorkExperience {
  jobtitle: string;
  employer: string;
  startdate: string;
  enddate: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  fieldofstudy: string;
  startdate: string;
  enddate: string;
  description: string;
}

interface ResumeProps {
  aboutMe: {
    name: string;
    title: string;
    phonenumber: string;
    location: string;
    email: string;
    linkedin: string;
    additionalinformation:string;
    other:string;
  };
  workExperiences: WorkExperience[];
  skills: [
    {
      description: string;
    }
  ];
  educationHistory: Education[];
  more: {
    sectionname: string;
    sectiondetails: string;
  };
}

const ResumeTemplate = forwardRef<HTMLDivElement, ResumeProps>((props, ref) => {
  const { aboutMe, workExperiences, skills, educationHistory, more } = props;

  return (
    <div ref={ref} className="p-8 w-[80vw] bg-white">
      {/* Personal Info Section */}
      <section className="mb-6">
        <h1 className="text-4xl font-bold">{aboutMe.name}</h1>
        <h2 className="text-2xl">{aboutMe.title}</h2>
        <p>
          {aboutMe.phonenumber} {aboutMe.location && `| ${aboutMe.location}`}{" "}
          {aboutMe.email && `| ${aboutMe.email}`}
          {aboutMe.linkedin && `| LinkedIn:${aboutMe.linkedin}`}
          {aboutMe.additionalinformation && `| ${aboutMe.additionalinformation}`}
          {aboutMe.other && `| ${aboutMe.other}`}
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600">WORK EXPERIENCE</h2>
        {workExperiences.map((work, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">{work.jobtitle}</h3>
            <div className="text-gray-600 flex justify-between ">
             <p> {work.employer} </p>
              <div className="w-[fit-content]">
              {work.startdate && ` ${work.startdate}`}{" "}
              {work.enddate && `to ${work.enddate}`}{" "}
              {work.startdate && !work.enddate && `to present`}
              </div>
            </div>
            {work.description && (
              <ul className="list-disc ml-6">
                {" "}
                {work.description.split(".").map((description, idx) => (
                  <li key={idx}>{description}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600">EDUCATION</h2>
        {educationHistory.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-bold">
              {edu.school} 
            </h3>
            <p>{edu.degree}  {edu.fieldofstudy ? `in ${edu.fieldofstudy}`:""}</p>
        
            <p className="text-gray-600">
              {edu.startdate} {edu.enddate && `to  ${edu.enddate}`}
            </p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600">SKILLS</h2>
        {skills.map((skill, index) => (
          <p key={index}>{skill.description}</p>
        ))}
      </section>
    </div>
  );
});

ResumeTemplate.displayName = "Resume";

export default ResumeTemplate;
