const gridSize = { xs: 12, sm: 6 };
const layout = "2-column";

// Adjust grid size based on layout
if (layout === "3-column") {
    gridSize.sm = 4;
}

export const formFields = {
    basicInformationData: [
        {
            name: "firstName",
            label: "First Name",
            type: "textfield",
            placeholder: "Enter First Name",
            gridSize,
            required: true,
            group: "basicInformation",
        },
        {
            name: "middleName",
            label: "Middle Name",
            type: "textfield",
            placeholder: "Enter Middle Name",
            gridSize,
            required: true,
            group: "basicInformation",
        },
        {
            name: "lastName",
            label: "Last Name",
            type: "textfield",
            placeholder: "Enter Last Name",
            gridSize,
            required: true,
            group: "basicInformation",
        },
        {
            name: "dateOfBirth",
            label: "Date of Birth",
            type: "date",
            placeholder: "Date of Birth",
            // gridSize,
            gridSize: { xs: 12, sm: 6 },
            required: true,
            group: "basicInformation",
        },
        {
            name: "gender",
            label: "Gender",
            type: "radio",
            gridSize: { xs: 12, sm: 12 },
            placeholder: "Choose Gender",
            group: "basicInformation",
            options: [
                {
                    radioValue: "male",
                    label: "Male",
                },
                {
                    radioValue: "female",
                    label: "Female",
                },
                {
                    radioValue: "other",
                    label: "Other",
                },
            ],
        },



    ],

    locationData: [
        {
            name: "address",
            label: "Address",
            type: "textfield",
            placeholder: "Enter address",
            gridSize,
            required: true,
            group: "location",
        },
        {
            name: "state",
            label: "State",
            type: "textfield",
            placeholder: "Enter state",
            gridSize,
            required: true,
            group: "addressDetails",
        },
        {
            name: "city",
            label: "City",
            type: "textfield",
            placeholder: "Enter name of city",
            gridSize,
            required: true,
            group: "location",
        },
        {
            name: "zipCode",
            label: "Zip Code",
            type: "textfield",
            placeholder: "Enter zip code",
            gridSize,
            required: true,
            group: "location",
        },
    ],
    spocData: [
        {
            name: "mobileNumber",
            label: "Mobile Number",
            type: "textfield",
            placeholder: "Enter Mobile Number",
            gridSize,
            required: true,
            group: "spoc",
        },
        {
            name: "alternateMobileNumber",
            label: "Alternate Mobile Number",
            type: "textfield",
            placeholder: "Enter Mobile Number",
            gridSize,
            required: true,
            group: "spoc",
        },
        {
            name: "Email",
            label: "Email",
            type: "textfield",
            placeholder: "Enter email",
            gridSize,
            required: true,
            group: "spoc",
        },


    ],
 
    siblingsInformation: [
        {
            name: "parentalStatus",
            label: "Parental Status",
            type: "radio",
            gridSize: { xs: 12, sm: 12 },
            placeholder: "Choose Parental Status",
            group: "siblingsInformation",
            options: [
                {
                    radioValue: "father",
                    label: "Father",
                    
                },
                {
                    radioValue: "mother",
                    label: "Mother",
                },
                {
                    radioValue: "other",
                    label: "Other",
                },
            ],
        },
        {

            name: "firstName",
            label: "Father First Name",
            type: "textfield",
            placeholder: "Enter First Name",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {

            name: "middleName",
            label: "Father Middle Name",
            type: "textfield",
            placeholder: "Enter Middle Name",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {

            name: "lastName",
            label: "Father Last Name",
            type: "textfield",
            placeholder: "Enter Last Name",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {
            name: "dateOfBirth",
            label: "Date Of Birth",
            type: "textfield",
            placeholder: "Select Date Of Birth",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {
            name: "fatherOccupation",
            label: "Father's Occupation",
            type: "textfield",
            placeholder: "Enter Father's Occupation",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {
            name: "address",
            label: "Address",
            type: "textfield",
            placeholder: "Enter Address",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {
            name: "annualIncome",
            label: "Annual Income",
            type: "textfield",
            placeholder: "Enter Annual Income",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        {
            name: "mobileNumber",
            label: "Mobile Number",
            type: "textfield",
            placeholder: "Mobile",
            gridSize,
            required: true,
            group: "fatherInformation",
        },
        
// Fields for Mother
{

    name: "firstName",
    label: "Mother First Name",
    type: "textfield",
    placeholder: "Enter First Name",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{

    name: "middleName",
    label: "Mother Middle Name",
    type: "textfield",
    placeholder: "Enter Middle Name",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{

    name: "lastName",
    label: "Mother Last Name",
    type: "textfield",
    placeholder: "Enter Last Name",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{
    name: "dateOfBirth",
    label: "Date Of Birth",
    type: "textfield",
    placeholder: "Select Date Of Birth",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{
    name: "motherOccupation",
    label: "Mother's Occupation",
    type: "textfield",
    placeholder: "Enter Father's Occupation",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{
    name: "address",
    label: "Address",
    type: "textfield",
    placeholder: "Enter Address",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{
    name: "annualIncome",
    label: "Annual Income",
    type: "textfield",
    placeholder: "Enter Annual Income",
    gridSize,
    required: true,
    group: "fatherInformation",
},
{
    name: "mobileNumber",
    label: "Mobile Number",
    type: "textfield",
    placeholder: "Mobile",
    gridSize,
    required: true,
    group: "fatherInformation",
},
    ],

    groupProfileData: [
        {
            name: "groupProfile",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "groupProfile",
        },
    ],
    renderedPicturesData: [
        {
            name: "renderedPicture",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "renderedPictures",
        },
    ],
    mediaData: [
        {
            name: "media",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "media",
        },
    ],

    powerBackup: [
        {
            name: "powerBackUpService",
            label: "Power Backup Service",
            type: "textfield",
            placeholder: "Enter name of power backup service",
            gridSize,
            required: true,
            group: "powerBackup",
        },
        {
            name: "powerCapacity",
            label: "Capacity in kVA",
            type: "textfield",
            placeholder: "Enter capacity in kVA",
            gridSize,
            required: true,
            group: "powerBackup",
        },

        {
            type: "addButton",
            label: "Add another service",
            name: "addButton",
            value: "addAnotherService",
        },
    ],

    constructionData: [
        {
            name: "landArea",
            label: "Land Area",
            type: "textfield",
            placeholder: "Enter Land Area",
            gridSize,
            required: true,
            group: "construction",
        },
        {
            name: "fsiArea",
            label: "FSI Area",
            type: "textfield",
            placeholder: "Enter FSI Area",
            gridSize,
            required: true,
            group: "construction",
        },
        {
            name: "builtUpArea",
            label: "Built-up area",
            type: "textfield",
            placeholder: "Enter Built-Up Area",
            gridSize,
            required: true,
            group: "construction",
        },
        {
            name: "",
            label: "",
            type: "",
            placeholder: "",
            gridSize,
            required: true,
            group: "construction",
        },
        {
            name: "constructionStartDate",
            label: "Construction Start Date",
            type: "textfield",
            placeholder: "Enter Construction Start Date",
            gridSize,
            required: true,
            group: "construction",
        },
        {
            name: "constructionEndDate",
            label: "Construction End Date",
            type: "textfield",
            placeholder: "Enter Expected Completion date",
            gridSize,
            required: true,
            group: "construction",
        },
    ],

    reraDatailsData: [
        {
            name: "promoterReraNumber",
            label: "Promoter RERA Number",
            type: "textfield",
            placeholder: "Enter promoter RERA number",
            gridSize,
            required: true,
            group: "reraDetails",
        },
        {
            name: "promoterReraCertificate",
            label: "Promoter RERA Certificate",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "reraDetails",
        },
        {
            name: "projectReraNumber",
            label: "Project RERA Number",
            type: "textfield",
            placeholder: "Enter promoter RERA number",
            gridSize,
            required: true,
            group: "reraDetails",
        },
        {
            name: "projectReraCertificate",
            label: "Project RERA Certificate",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "reraDetails",
        },
    ],

    reraMasterData: [
        {
            name: "bankName",
            label: "Bank Name",
            type: "textfield",
            placeholder: "Enter Bank name",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "bankAccountNumber",
            label: "Bank account number",
            type: "textfield",
            placeholder: "Enter Bank account number",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "ifscCode",
            label: "IFCS Code",
            type: "textfield",
            placeholder: "Enter IFCS Code",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "branchAddress",
            label: "Branch Address",
            type: "textfield",
            placeholder: "Enter Branch Address",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "micr",
            label: "MICR",
            type: "textfield",
            placeholder: "Enter MICR",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "accountName",
            label: "Account Name",
            type: "textfield",
            placeholder: "Enter Account Name",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "aliasIfAny",
            label: "Alias, if any",
            type: "textfield",
            placeholder: "Enter Alias",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            name: "accountPurpose",
            label: "Account purpose",
            type: "textfield",
            placeholder: "Enter Account purpose",
            gridSize,
            required: true,
            group: "reraMaster",
        },
        {
            type: "addButton",
            label: "Add New",
            name: "addButton",
            value: "addBankService",
        },
    ],
    revisedReraData: [
        {
            name: "revisedReraNumber",
            label: "Revised RERA Number",
            type: "textfield",
            placeholder: "Enter Revised RERA number",
            gridSize,
            required: true,
            group: "revisedRera",
        },
        {
            name: "revisedReraCertificate",
            label: "Revised RERA Certificate",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "revisedRera",
        },
        {
            name: "dateOfReraRegistration",
            label: "Enter Date of Rera Registration",
            type: "textfield",
            placeholder: "Enter promoter RERA number",
            gridSize,
            required: true,
            group: "revisedRera",
        },
        {
            name: "proposedPossessionDate",
            label: "Proposed Possession Date",
            type: "textfield",
            placeholder: "Enter Proposed Possession date",
            gridSize,
            required: true,
            group: "revisedRera",
        },
        {
            name: "proposedPossessionDateExtension",
            label: "Proposed Possession date extension (if any)",
            type: "textfield",
            placeholder: "Enter Proposed Possession date",
            gridSize,
            required: true,
            group: "revisedRera",
        },
    ],
    revisedReraRadioData: [
        {
            name: "revisedRera",
            label: "Revised RERA ?",
            type: "radio",
            gridSize: { xs: 12, sm: 12 },
            placeholder: "Revised RERA",
            group: "revisedReraRadio",
            options: [
                {
                    radioValue: "Yes",
                    label: "Yes",
                },
                {
                    radioValue: "No",
                    label: "No",
                },
            ],
        },
    ],
    technicalApprovalData: [
        {
            name: "documentName",
            label: "Document Name",
            type: "textfield",
            placeholder: "Enter document name",
            gridSize,
            required: true,
            group: "technicalUploadData",
        },
        {
            name: "uploadDocument",
            label: "Upload Document",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "technicalUploadData",
        },
        {
            type: "addButton",
            label: "Add New",
            name: "addButton",
            value: "addDocument",
        },
    ],
    landData: [
        {
            name: "documentName",
            label: "Document Name",
            type: "textfield",
            placeholder: "Enter document name",
            gridSize,
            required: true,
            group: "addLandData",
        },
        {
            name: "uploadDocument",
            label: "Upload Document",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "addLandData",
        },
        {
            type: "addButton",
            label: "Add New",
            name: "addButton",
            value: "addLandDocument",
        },
    ],
    additionalDocData: [
        {
            name: "applicationForm",
            label: "Application form",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "allotmentLetterBuilderBuyerAgreement",
            label: "Allotment letter / Builder buyer agreement",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "agreementToSell",
            label: "Agreement to sell",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "demandLetter",
            label: "Demand letter",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "gstInvoice",
            label: "GST Invoice",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "demandReminders",
            label: "Demand reminders",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "cancellationNotices",
            label: "Cancellation notices",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "layoutsOfAllTypesBhk",
            label: "Layouts of all types BHK/Shops/offices/others",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "flatCancellation",
            label: "Flat cancellation",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "flatChange",
            label: "Flat change",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            name: "documentName",
            label: "Document Name",
            type: "textfield",
            placeholder: "Enter document name",
            gridSize,
            required: true,
            group: "additonalUpload",
        },
        {
            name: "uploadDocument",
            label: "Upload Document",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "additonalUpload",
        },
        {
            type: "addButton",
            label: "Add New",
            name: "addButton",
            value: "addAdditionalDocument",
        },
    ],
    postBookingData: [
        {
            name: "documentName",
            label: "Document Name",
            type: "textfield",
            placeholder: "Enter document name",
            gridSize,
            required: true,
            group: "postBooking",
        },
        {
            name: "uploadDocument",
            label: "Upload Document",
            type: "file",
            accept: ["image/jpeg", "image/png", "image/bmp"],
            gridSize,
            group: "postBooking",
        },
        {
            type: "addButton",
            label: "Add New",
            name: "addButton",
            value: "addPostBooking",
        },
    ],
};