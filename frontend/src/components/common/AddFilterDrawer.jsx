import React from "react";
import SideDrawer from "../dashboard/SideDrawer";
import FormModule from "./FormModule";


const AddFilterDrawer = ({
  open,
  closeDrawer,
  formData,
  handleChange,
  formFields,
}) => {
  return (
    <SideDrawer
      open={open}
      closeDrawer={closeDrawer}
      title="Update Lead"
      subtitle="Here you can update the lead stage"
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

export default AddFilterDrawer;