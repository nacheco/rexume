import { ResumeStep } from "@/types/resumeTypes";
import { Field } from "@/types/props";

export const steps: ResumeStep[] = [
  {
    step: 1,
    title: "About Me",
    fields: [
      { name: "Name", type: "text", placeholder: "Your full name" },
      { name: "Title", type: "text", placeholder: "Your professional title" },
      { name: "Phone", type: "tel", placeholder: "Your phone number" },
      { name: "Email", type: "email", placeholder: "Your email address" },
      { name: "Location", type: "text", placeholder: "Your location" },
      { name: "LinkedIn", type: "url", placeholder: "Your LinkedIn profile URL" },
      { name: "Additional Information", type: "textarea", placeholder: "Any additional information" },
    ] as Field[]
  },
  {
    step: 2,
    title: "Work Experience",
    fields: [
      { name: "Employer", type: "text", placeholder: "Company name" },
      { name: "Job Title", type: "text", placeholder: "Your position" },
      { name: "Start Date", type: "date", placeholder: "Start date" },
      { name: "End Date", type: "date", placeholder: "End date" },
      { name: "Description", type: "textarea", placeholder: "Job description and responsibilities" },
    ] as Field[]
  },
  {
    step: 3,
    title: "Education",
    fields: [
      { name: "School", type: "text", placeholder: "Institution name" },
      { name: "Degree", type: "text", placeholder: "Degree obtained" },
      { name: "Field of Study", type: "text", placeholder: "Major or field of study" },
      { name: "Start Date", type: "date", placeholder: "Start date" },
      { name: "End Date", type: "date", placeholder: "End date or expected graduation" },
      { name: "Description", type: "textarea", placeholder: "Additional details about your education" },
    ] as Field[]
  },
  {
    step: 4,
    title: "Skills",
    fields: [
      { name: "Skills", type: "textarea", placeholder: "Enter your skills, one per line" },
    ] as Field[]
  },
  {
    step: 5,
    title: "Additional Information",
    fields: [
      { name: "Section Name", type: "text", placeholder: "Name of the additional section" },
      { name: "Section Details", type: "textarea", placeholder: "Details for the additional section" },
    ] as Field[]
  }
];