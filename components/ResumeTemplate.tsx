"use client";
import React, { useEffect, useState } from "react";
import { steps } from "@/app/resume-builder/page";

const ResumeTemplate = ({
  aboutMe,
  skills,
  workExperiences,
  educationHistory,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-[80vw] bg-white">
      {/* user info */}
      <div className="w-[100%]">
        <h4 className="text-2xl">{aboutMe.name}</h4>
        <div className="flex">
          <p className="text-sm mr-4">{aboutMe.title}</p>
          <p className="text-sm mr-4">{aboutMe.phonenumber}</p>
          <p className="text-sm mr-4">{aboutMe.email}</p>
          <p className="text-sm mr-4">{aboutMe.location}</p>
          <p className="text-sm mr-4">{aboutMe.linkedin}</p>
          <p className="text-sm mr-4">{aboutMe.additionalinformation}</p>
          <p className="text-sm mr-4">{aboutMe.other}</p>
        </div>
        {workExperiences &&
          workExperiences?.map((work) => (
            <>
              <h4 className="text-xl"> {work.employer}</h4>
              <div className="flex justify-between ">
                <p className="text-sm mr-4">{work.jobtitle}</p>
                <p className="text-xs mr-4">
                  {work.startdate} to {work.enddate}
                </p>
                
              </div>
              <ul>
                {work.description.split(".").map((bullet) => (
                  <li className="text-sm mr-4">{bullet}</li>
                ))}
              </ul>
            </>
          ))}
      </div>
    </div>
  );
};

export default ResumeTemplate;
