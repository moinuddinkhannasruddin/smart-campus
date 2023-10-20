import React from 'react'
import Stack from '../common/Stack';
import { Button, Paper } from '@mui/material';
import Box from '../common/Box';
import Header from '../common/Header';
import FormModule from '../common/FormModule';


const AdmissionForms = ({ fieldsData, formData, handleChange }) => {
   
    const style = {
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
    };
    return (
        <Stack sx={{ mt: 3 }}>
            <Paper style={style}>
                <Header
                    label="Student Information"
                    image="/assets/icons/InfocircleIcon.svg"
                />
                <Box style={{ marginTop: "0.4rem" }}>
                    <Header
                        label="Basic Information"
                        image="/assets/icons/InfocircleIcon.svg"
                    />
                    <FormModule
                        fieldsData={fieldsData.basicInformationData}
                        formData={formData}
                        handleChange={handleChange}
                    />
                    
                </Box>
                <Box style={{ marginTop: "0.4rem" }}>
                    <Header
                        label="Address Details"
                        image="/assets/icons/InfocircleIcon.svg"
                    />
                    <FormModule
                        fieldsData={fieldsData.locationData}
                        formData={formData}
                        handleChange={handleChange}
                    />
                    
                </Box>
                <Box style={{ marginTop: "0.4rem" }}>
                    <Header
                        label="Contact Details"
                        image="/assets/icons/InfocircleIcon.svg"
                    />
                    <FormModule
                        fieldsData={fieldsData.spocData}
                        formData={formData}
                        handleChange={handleChange}
                    />
                    
                </Box>
                <Box style={{ marginTop: "0.4rem" }}>
                    <Header
                        label="Siblings Information"
                        image="/assets/icons/InfocircleIcon.svg"
                    />
                    <FormModule
                        fieldsData={fieldsData.siblingsInformation}
                        formData={formData}
                        handleChange={handleChange}
                    />
                    
                </Box>  
                <Button variant="contained">New Addmission</Button>

            </Paper>
            
        </Stack>
    )
}

export default AdmissionForms