import React from "react";
import SideDrawer from "../dashboard/SideDrawer";
import FormModule from "./FormModule";


const AddBasicDetailsDrawer = ({
  open,
  closeDrawer,
  formData,
  handleChange,
  formFields
}) => {
  return (
    <SideDrawer
      open={open}
      closeDrawer={closeDrawer}
      title="Schedule new meeting"
      subtitle="Here you can schedule new meeting"
      apply="Save"
      cancel="Cancel"
    >
      <FormModule
        fieldsData={formFields}
        formData={formData}
        handleChange={handleChange}
      />
    </SideDrawer>
  );
};

export default AddBasicDetailsDrawer;
