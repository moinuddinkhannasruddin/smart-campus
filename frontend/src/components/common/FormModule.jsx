import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "@mui/lab/DatePicker";
import CustomTextField from "./TextField";
import { validateField } from "helpers/validations";
import CommonDropzone from "./FileUpload";
import Radio from "./Radio";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const FormModule = ({ fieldsData, handleFileChange, handleChange,formData }) => {
  // const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const classes = useStyles();

  const textFieldStyle = {
    color: "var(--text-black, #101828)",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  };


  const OutputForm = () => {
    return (
      <Grid container spacing={2}>
        {fieldsData.map((field) => {
          if (field.type === "textfield") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
  
                <CustomTextField
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{
                    style: {
                      fontSize: 16,
                      height: "56px",
                    },
                  }}
                  labelSx={{
                    marginBottom: "6px",
                    fontSize: "0.875rem",
                  }}
                  error={!!formErrors[field.name]}
                  helperText={formErrors[field.name] || ""}
                  group={field.group}
                />
              </Grid>
            );
          }

          if (field.type === "radio") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
                <Radio 
                group={field.group}
                label={field.label}
                name={field.name}
                value={formData[field.name] || ""}
                options={field.options}
                handleChange={handleChange}
                labelSx={{
                  marginBottom: "6px",
                  fontSize: "0.875rem"
                }}    
                />
              </Grid>
            )
          }
  
          if (field.type === "select") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
  
                <CustomTextField
                  group={field.group}
                  label={field.label}
                  select
                  placeholder={field.placeholder}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{
                    style: {
                      fontSize: 16,
                      height: "56px"
                    },
                  }}
                  labelSx={{
                    marginBottom: "6px",
                    fontSize: "0.875rem"
                  }}              >
                  {field.options.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      style={textFieldStyle}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
            )
          }
  
  
          if (field.type === "file") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
  
                <CommonDropzone
                  group={field.group}
                  name={field.name}
                  label={field?.label}
                  acceptedFileTypes={field.accept}
                  handleChange={handleChange}
                  multipleFiles={false}
                />
              </Grid>
            );
          }
          if (field.type === "date") {
            return (<DatePicker />);
          }
          if (field.type === "textArea") {
            return (
              <Grid item {...field.gridSize} key={field.name}>
  
                <CustomTextField
                  group={field.group}
                  label={field.label}
                  placeholder={field.placeholder}
                  multiline
                  rows={4}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{ style: textFieldStyle }}
                />
              </Grid>
            );
          }

          if (field.type === "addButton") {
            return (
              <Grid container>
              <Button sx={{ mt: 3,ml:2 }} className={classes.addServiceButton}>
                <span className={classes.addSign}>+</span>
                <span
                  className={classes.addProjectText}
                  onClick={()=>handleChange({name:field.name,value:field.value})}
                >
                  {field.label}
                </span>
              </Button>
              </Grid>
            )
          }

          // return (
          //   <Grid item {...field.gridSize} key={field.name}>
          //     {/* You can add any custom content for other field types here */}
          //   </Grid>
          // );
        })}
      </Grid>
    );
  }

  return (
    <Grid>

    {OutputForm()}
    </Grid>
  )  

};

export default FormModule;


const useStyles = makeStyles((theme) => ({
  addServiceButton: {
    height: "36px !important",
    border: `1px solid ${theme.palette.blue.main} !important`,
    borderRadius: "8px !important",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize !important",
    padding: "8px 16px !important",
    color: `${theme.palette.blue.main}`,
    fontWeight: "600 !important",
    textDecoration: "none !important",
  },
  addSign: {
    width: "20px !important",
    height: "20px !important",
    lineHeight: "20px",
    fontSize: "17px",
  },
  addProjectText: {
    height: "20px !important",
    fontSize: "13px",
  },
}));
