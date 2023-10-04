import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import Box from './Box';



export default function HorizontalStepper({ steps = [], activeStep, setActiveStep }) {
    const classes = useStyles();
    const [completed, setCompleted] = React.useState({});
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepLabel color="inherit" onClick={handleStep(index)}>
                            <Typography variant="small" className={classes.stepperheading}>{label}</Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}


const useStyles = makeStyles((theme) => ({
    stepperheading: {
        lineHeight: '20px',
        textAlign: 'center',
        color: `${theme.palette.blue.main}`
    }
}));