import { Field } from "@/types/props";

export interface AboutMeProps {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    additionalInformation: string;
    other: string;
  }
  
  export interface WorkExperienceProps {
    employer: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface EducationProps {
    school: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface SkillProps {
    description: string;
  }
  
  export interface MoreProps {
    sectionName: string;
    sectionDetails: string;
  }
  
export type ResumeStep = {
    step: number;
    title: string;
    fields: Field[]; // Change this from string[] to Field[]
  };