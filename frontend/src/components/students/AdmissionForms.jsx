import React from 'react'
import Stack from '../common/Stack';
import { Paper } from '@mui/material';
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
                        fieldsData={fieldsData}
                        formData={formData}
                        handleChange={handleChange}
                    />
                </Box>
            </Paper>
        </Stack>
    )
}

export default AdmissionForms