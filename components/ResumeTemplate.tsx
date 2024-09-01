"use client";
import React, { useEffect, useState } from "react";
import { steps } from "@/app/resume-builder/page";

const ResumeTemplate = ({
  aboutMe,
  // skills,
  // workExperiences,
  // educationHistory,
}) => {
  console.log(aboutMe);
  return (
    <div className="w-[50vw] bg-white">
      {/* user info */}
      <div className="w-[100%]">
        <h4 className="text-2xl">{aboutMe.name}</h4>
        <div className="flex">
          <p className="text-sm">{aboutMe.title}</p>
          <p className="text-sm">{aboutMe.phonenumber}</p>
          <p className="text-sm">{aboutMe.email}</p>
          <p className="text-sm">{aboutMe.location}</p>
          <p className="text-sm">{aboutMe.linkedin}</p>
          <p className="text-sm">{aboutMe.additionalinformation}</p>
          <p className="text-sm">{aboutMe.other}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
