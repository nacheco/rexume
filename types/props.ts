export type Step = number; // Assuming step is a number, it could also be an enum for better type safety

export interface AboutMe {
  name: string;
  title: string;
  phonenumber: string;
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
  field: string;
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
  step: Step;
  fields: Field[];

  aboutMe: AboutMe;
  handleAboutMeChange: (key: string, value: string) => void;

  workExperiences: WorkExperience[];
  addWorkExperience: () => void;
  handleWorkExperienceChange: (
    index: number,
    field: string,
    value: string
  ) => void;

  educationHistory: Education[];
  handleEducationHistoryChange: (
    index: number,
    field: string,
    value: string
  ) => void;
  addEducationHistory: () => void;

  skills: Skill[];
  handleSkillChange: (index: number, field: string, value: string) => void;
  addSkill: () => void;

  more: Skill[];
  handleMoreSectionChange: (
    index: number,
    field: string,
    value: string
  ) => void;
  addMore: () => void;

  prevStep: () => void | null;
  nextStep: () => void | null;
  handlePrint:() => any
}
