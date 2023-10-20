import React, { Component } from 'react'
import { formFields } from './Constants'

import AdmissionForms from '@/components/students/AdmissionForms'
import { Pagination } from '@mui/material';

class AdmissionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectInformationForm: {
                basicInformation: {},
                addressDetails:{},
                location: {},
                spoc: {},
                siblingsInformation:{},
                powerBackup: {},
                groupProfile: {},
                renderPicture: {},
                media: {}   
            }
        }
    }

    handleChange = ({ name, value, group }) => {
        //KEEP IT HERE
        console.log(name, value, group);


        //Handle Buttons Here
        if (name === "addButton") {
            if (value === "addAnotherService") {
                this.addAnotherService()
                return;
            }
        }


        this.setState((prevState) => (
            {
                projectInformationForm: {
                    ...prevState.projectInformationForm,
                    [group]: {   
                        ...prevState.projectInformationForm[group],
                        [name]: value,
                    },
                },
            }));

    }
    render() {
        const projectInformationForm = this.state;
        console.log(formFields);
        return (
            <AdmissionForms
                fieldsData={formFields}
                formData={projectInformationForm}
                handleChange={this.handleChange} />

                
               
        )
    }
}

export default AdmissionContainer