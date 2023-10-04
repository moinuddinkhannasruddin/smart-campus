import React from "react";
import Box from "./Box";
import Stack from "./Stack";
import Text from "./Text";
import CustomButton from "./CustomButton";
import CustomTextField from "./TextField";

const DataHeaderCard = ({
  leadsCount,
  headerText,
  subheaderText,
  addLeadButtonText,
  importButtonText,
  filterButtonText,
  textFieldProps,
  onAddLeadClick,
  onImportClick,
  onFilterClick,
}) => {
  return (
    <Box>
      <Stack
        sx={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={3}
        py={2}
        bgcolor="common.white"
      >
        <Box textAlign="left">
          <Box display="flex" flexDirection="row">
            <Text variant="typo18" color="text.primary">
              {headerText}
            </Text>
            <Text
              ml={1}
              p={1}
              sx={{ borderRadius: "16px" }}
              backgroundColor="#EAECF0"
              variant="typo12"
              color="text.secondary"
            >
              {leadsCount} leads
            </Text>
          </Box>
          <Text variant="typo14light" color="text.secondary">
            {subheaderText}
          </Text>
        </Box>
        <Box textAlign="right">
          {addLeadButtonText && (
            <CustomButton
            sx={{ padding:"10px,16px" }}
              color="primary"
              size="medium"
              startIcon={
                <img
                  src="/assets/icons/addicon.svg"
                  alt="Add Lead icon"
                  width="24"
                  height="24"
                />
              }
              text={addLeadButtonText}
              onClick={onAddLeadClick}
            />
          )}
        </Box>
      </Stack>
      <Stack
        sx={12}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        px={3}
        py={2}
        bgcolor="common.white"
      >
        <Box textAlign="left">
          {textFieldProps && (
            <CustomTextField
              size="medium"
              InputProps={{ sx: { width: "452px", height: "44px" } }}
              {...textFieldProps}
            />
          )}
        </Box>
        <Box textAlign="right" flexDirection="row" justifyContent="space-between">
          {importButtonText && (
            <CustomButton
              sx={{ marginRight: "26px",padding:"10px,16px" }}
              color="secondary"
              size="medium"
              startIcon={
                <img
                  src="/assets/icons/importicon.svg"
                  alt="Import icon"
                  width="24"
                  height="24"
                />
              }
              text={importButtonText}
              onClick={onImportClick}
            />
          )}
          {filterButtonText && (
            <CustomButton
            sx={{ padding:"10px,16px" }}
              color="secondary"
              size="medium"
              startIcon={
                <img
                  src="/assets/icons/filtericon.svg"
                  alt="Filter icon"
                  width="24"
                  height="24"
                />
              }
              text={filterButtonText}
              onClick={onFilterClick}
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default DataHeaderCard;
