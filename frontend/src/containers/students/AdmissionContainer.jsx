import React, { Component } from 'react'
import { formFields } from './Constants'
import AdmissionForms from '@/components/students/AdmissionForms'

class AdmissionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectInformationForm: {
                basicInformation: {},
                location: {},
                spoc: {},
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
        return (
            <AdmissionForms
                fieldsData={formFields.basicInformationData}
                formData={projectInformationForm}
                handleChange={this.handleChange} />
        )
    }
}

export default AdmissionContainer