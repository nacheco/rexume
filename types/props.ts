export type Step = number; // Assuming step is a number, it could also be an enum for better type safety

export interface AboutMe {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  additionalinformation: string;
  other: string;
}

export interface WorkExperience {
  employer: string;
  jobtitle: string;
  startdate: string;
  enddate: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  fieldofstudy: string;
  startdate: string;
  enddate: string;
  description: string;
}

export interface Skill {
  description: string;
}
export interface More {
  sectionname: string;
  sectiondetails: string;
}
export interface Field {
  name: string;
  type: string;
  placeholder: string;
}
export interface StepInfo {
  step: number;
  fields: Field[];
}

export interface Props {
  step: number;
  fields: any; // Replace 'any' with a more specific type if possible
  aboutMe: any; // Replace 'any' with a more specific type
  handleAboutMeChange: (field: string, value: string) => void;
  workExperiences: any[]; // Replace 'any[]' with a more specific type
  addWorkExperience: () => void;
  handleWorkExperienceChange: (
    index: number,
    field: string,
    value: string
  ) => void;
  removeWorkExperience: (index: number) => void;
  educationHistory: Education[];
  handleEducationHistoryChange: (
    index: number,
    field: string,
    value: string
  ) => void;
  addEducationHistory: () => void;
  removeEducationHistory: (index: number) => void; // Add this line

  skills: Skill[];
  handleSkillChange: (index: number, field: string, value: string) => void;
  addSkill: (description: string) => void; // Update this line
  removeSkill: (index: number) => void; // Add this line

  more: Skill[];
  handleMoreSectionChange: (
    index: number,
    field: string,
    value: string
  ) => void;
  addMore: () => void;

  prevStep: () => void | null;
  nextStep: () => void | null;
}
