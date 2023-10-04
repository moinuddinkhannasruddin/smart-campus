import React from "react";
import Box from "./Box";
import Text from "./Text";
import CustomButton from "./CustomButton";

const DataNotAvailableCard = ({
  showImportButton,
  showAddLeadButton,
  importButtonText,
  addLeadButtonText,
  titleText,
  descriptionText,
}) => {
  return (
    <Box backgroundColor="common.white" height="394px">
      <Box
        px={4}
        sx={{
          position: "relative",
          width: 500,
          maxWidth: "95%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        backgroundColor="common.white"
      >
        <Box textAlign="center">
          <img src="/assets/icons/datanullimg.svg" alt="" />
          <Text mb={2} mt={2} variant="typo16medium" color="text.primary">
            {titleText || "No leads found"}
          </Text>
          <Text
            textAlign="center"
            mb={2}
            variant="typo14light"
            color="text.secondary"
          >
            {descriptionText || "This message indicates that there is currently no available information or data to display based on the user's search or query."}
          </Text>
          <Box mt={4}>
            {showImportButton && (
              <CustomButton
                sx={{ marginRight: "16px" }}
                text={importButtonText || "Import"}
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
              />
            )}
            {showAddLeadButton && (
              <CustomButton
                text={addLeadButtonText || "Add lead"}
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
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataNotAvailableCard;
