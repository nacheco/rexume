import { motion, AnimatePresence } from "framer-motion";

const StepForm = ({
  step,
  fields,
  formData,
  handleChange,
  prevStep,
  nextStep,
}) => {
  console.log("fields", fields);
  return (
    <motion.div
    className="flex flex-col items-center w-[100vw]"
      key={`step${step}`}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      {fields.map((field) => (
        <div key={field.name} className="w-[40vw] ">
          <h2>{field.name}</h2>
          <input
          className="w-[100%]"
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        </div>
      ))}
      <div>
        {prevStep && <button onClick={prevStep}>Back</button>}
        {nextStep ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>
    </motion.div>
  );
};

export default StepForm;
