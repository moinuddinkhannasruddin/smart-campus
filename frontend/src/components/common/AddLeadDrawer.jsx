import React, { useState } from "react";
import FormModule from "./FormModule";
import SideDrawer from "../dashboard/SideDrawer";
import HorizontalStepper from "./HorizontalStepper";
import Stack from "./Stack";

const AddLeadDrawer = ({
  open,
  closeDrawer,
  handleChange,
  formData,
  formFields,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < formFields.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SideDrawer
      open={open}
      closeDrawer={closeDrawer}
      title="Schedule new meeting"
      subtitle="Here you can schedule a new meeting"
      apply="Next"
      cancel="Cancel"
      onApply={handleNext}
      onCancel={handlePrevious}
    >
      <Stack backgroundColor="secondary.main" sx={{ paddingLeft: "-40px" }}>
        <HorizontalStepper
          steps={["Basic Details", "Assignee Details"]}
          activeStep={currentStep}
          setActiveStep={setCurrentStep}
        />
      </Stack>
      {formFields && formFields.length > 0 ? (
        <>
          <FormModule
            fieldsData={formFields[currentStep]}
            formData={formData}
            handleChange={handleChange}
          />
          <div>
            {currentStep > 0 && (
              <button type="button" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {currentStep < formFields.length - 1 && (
              <button
                type="button"
                onClick={() => {
                  handleNext();
                }}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <p>No form fields are available.</p>
      )}
    </SideDrawer>
  );
  
};

export default AddLeadDrawer;