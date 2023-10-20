
import React, { Component } from "react";
import { formFields } from "../Constants";
import Box from "@/components/common/Box";
import Stack from "@/components/common/Stack";
import Text from "@/components/common/Text";
import Table from "@/components/common/Table";
import DataHeaderCard from "@/components/common/DataHeaderCard";
import DataNotAvailableCard from "@/components/common/DataNotAvailableCard";
import WithRouter from "@/helpers/withRouter";
import AddFilterDrawer from "@/components/common/addFilterDrawer";
import AddLeadDrawer from "@/components/common/AddLeadDrawer";
import AddBasicDetailsDrawer from "@/components/common/AddBasicDetailsDrawer";


const data = [
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
  {
    customername: "sufiyan",
    contactnumber: "566-204-2981",
    contactemail: "sufiyan@yahoo.com",
    residentstatus: "Maharashtra",
    location: "mumbai",
    gender: "Male",

  },
];


export class StudentDashboardContainer extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      isUpdateLeadOpen: false,
      isBasicDrawerOpen: false,
      isAddLeadOpen: false,
      isAddFilterOpen: false,
      isModalOpen: false,
      basicDetails: {},

      activeStep: 0,
      formBackup: formFields.formBackup,
      formData: {
        addLead: {},
        addFilter: {},
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  setActiveStep = (step) => {
    this.setState({ activeStep: step });
  };

  handleChange(e, newValue) {
    this.setState({ value: newValue });
  }
  handleAddLeadClick = (value) => {
    this.setState({ open: value });
  };
  handleUpdateLeadDrawer = (value) => {
    this.setState({ isUpdateLeadOpen: value });
  };
  handleAddLeadDrawer = (value) => {
    this.setState({ isAddLeadOpen: value });
  };
  handleChangeForm = ({ name, value, group }) => {
    //KEEP IT HERE
    console.log(name, value, group);

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [group]: {
          ...prevState.formData[group],
          [name]: value,
        },
      },
    }));
  };
  handleBasicDetailsDrawer = (value) => {
    this.setState({ isBasicDrawerOpen: value });
  };
  handleAddFilterDrawer = (value) => {
    this.setState({ isAddFilterOpen: value });
  };
  handleModal = (value) => {
    this.setState({ isModalOpen: value });
  };
  handleChange = () => {
    //KEEP IT HERE
    console.log("handle function");
  };
  handleCustomerNameClick = (d) => {

    console.log("THISSS", this.props)

    this.props.router.navigate("/LeadsDetails");
  };
  render() {
    const {
      open,
      isUpdateLeadOpen,
      basicDetails,
      isBasicDrawerOpen,
      isAddLeadOpen,
      isAddFilterOpen,
      formBackup,
      formData,
      isModalOpen,
    } = this.state;
    const columns = [
      {
        field: "customername",
        headerText: "Student name",
        style: { whiteSpace: "nowrap" },
        bodyCellComponent: (v, d) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => this.handleCustomerNameClick(d)}
              >
                <Text ml={1} color="text.primary" variant="typo14">
                  {" "}
                  {d.customername}
                </Text>
              </Box>
            </>
          );
        },
      },
      {
        field: "contact",
        headerText: "Contact",
        bodyCellComponent: (v, d) => {
          return (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Text ml={1} color="text.primary" variant="typo14light">
                  {d.contactnumber}
                </Text>
                <Text ml={1} color="text.secondary" variant="typo14light">
                  {d.contactemail}
                </Text>
              </Box>
            </>
          );
        },
      },
      {
        field: "residentstatus",
        headerText: "Resident status",
      },
      {
        field: "location",
        headerText: "Location",
      },
      {
        field: "gender",
        headerText: "Gender",
      },
    ];
    const isDataAvailable = data && data.length > 0;
    return (
      <>
        <Box display="flex" flexDirection="row" mb={3}>

        </Box>
        <DataHeaderCard

          headerText="Students"
          addLeadButtonText="New Admission"
          filterButtonText="Filter"

          onAddLeadClick={this.handleAddLeadDrawer}
          onImportClick={() => {
            this.handleModal(true);
          }}
          onFilterClick={this.handleAddFilterDrawer}
        />

        {isDataAvailable ? (
          <Stack>
            <Table columns={columns} data={data} paginationBottom />
          </Stack>
        ) : (
          <DataNotAvailableCard
            showImportButton={true}
            showAddLeadButton={true}
            importButtonText="Custom Import Text"
            addLeadButtonText="Custom Add Lead Text"
            titleText="Custom Title Text"
            descriptionText="Custom Description Text"
          />
        )}
        <AddFilterDrawer
          open={isAddFilterOpen}
          closeDrawer={this.handleAddFilterDrawer}
          formFields={formFields.addFilterData}
          formData={formData.addFilter}
          formBackup={formBackup}
          handleChange={this.handleChangeForm}
        />
        <AddLeadDrawer
          open={isAddLeadOpen}
          closeDrawer={this.handleAddLeadDrawer}
          formFields={formFields.addLeadData}
          formData={formData.addLead}
          formBackup={formBackup}
          handleChange={this.handleChangeForm}
        />
        <AddBasicDetailsDrawer
          open={isBasicDrawerOpen}
          closeDrawer={this.handleBasicDetailsDrawer}
          formData={basicDetails}
          handleChange={this.handleChangeForm}
        />
      </>
    );
  }
}

export default WithRouter(StudentDashboardContainer);