// import React, { forwardRef } from "react";

// // Define props interface
// interface ResumeProps {
//   personalInfo: {
//     name: string;
//     title: string;
//     phoneNumber: string;
//     email: string;
//     location: string;
//     linkedIn: string;
//     additionalInfo: string;
//     other: string;
//   };
//   workExperience: {
//     employer: string;
//     jobTitle: string;
//     startDate: string;
//     endDate: string;
//     description: string; // Assume this is a string containing bullet points separated by periods
//   }[];
//   education: {
//     school: string;
//     degree: string;
//     fieldOfStudy: string;
//     startDate: string;
//     endDate: string;
//     description: string; // Assume this is a string containing bullet points separated by periods
//   }[];
//   skills: string[];
//   more:string[];

// }

// const Resume = forwardRef<HTMLDivElement, ResumeProps>(
//   ({ personalInfo, workExperience, education, skills,more }, ref) => {
//     return (
//       <div ref={ref} className="resume">
//         <section className="personal-info">
//           <h1>{personalInfo.name}</h1>
//           <h2>{personalInfo.title}</h2>
//           <p>{personalInfo.phoneNumber}</p>
//           <p>{personalInfo.email}</p>
//           <p>{personalInfo.location}</p>
//           <p>{personalInfo.linkedIn}</p>
//           <p>{personalInfo.additionalInfo}</p>
//           <p>{personalInfo.other}</p>
//         </section>

//         <section className="work-experience">
//           <h2>Work Experience</h2>
//           {workExperience.map((work, index) => (
//             <div key={index}>
//               <h3>
//                 {work.jobTitle} at {work.employer}
//               </h3>
//               <p>
//                 {work.startDate} - {work.endDate}
//               </p>
//               <ul>
//                 {/* Render descriptions as list items */}
//                 {work.description.split(".").map((desc, i) => desc && (
//                   <li key={i}>{desc.trim()}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>

//         <section className="education">
//           <h2>Education</h2>
//           {education.map((edu, index) => (
//             <div key={index}>
//               <h3>
//                 {edu.degree} in {edu.fieldOfStudy}
//               </h3>
//               <p>{edu.school}</p>
//               <p>
//                 {edu.startDate} - {edu.endDate}
//               </p>
//               <ul>
//                 {/* Render descriptions as list items */}
//                 {edu.description.split(".").map((desc, i) => desc && (
//                   <li key={i}>{desc.trim()}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </section>

//         <section className="skills">
//           <h2>Skills</h2>
//           <ul>
//             {skills.map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//           </ul>
//         </section>
//         <section className="additional-sections">
//           {more.map((section, index) => (
//             <div key={index}>
//               <h3>{section.sectionName}</h3>
//               <p>{section.sectionDetails}</p>
//             </div>
//           ))}
//         </section>
     
//       </div>
//     );
//   }
// );

// // Add a display name to the component
// Resume.displayName = "Resume";

// export default Resume;
