import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import CustomButton from "./CustomButton";

// Custom Previous Button Component
const CustomPreviousButton = ({ onClick }) => (
  <CustomButton
    startIcon={<img src="/assets/icons/previousicon.svg" />}
    text="Previous"
    color="secondary"
    onClick={onClick}
    style={{
      float: "left", // Align to the left
    }}
  />
);

// Custom Next Button Component
const CustomNextButton = ({ onClick }) => (
  <CustomButton
    text="Next"
    endIcon={<img src="/assets/icons/nexticon.svg"  />}
    color="secondary"
    onClick={onClick}
    style={{
      float: "right", // Align to the right
    }}
  />
);

export default function PaginationComponent() {
  const handleChange = (event, value) => {
    // Handle the pagination change here
    console.log(`Page ${value} clicked.`);
  };

  return (
    <Stack spacing={2} justifyContent="center" alignItems="center"n backgroundColor="common.white" p={2}>
      <Pagination
        count={15}
        size="large"
        shape="rounded"
        renderItem={(item) => {
          return (
            <PaginationItem
              className={`pagination_${item.type}`}
              size="small"
              sx={{
                cursor: "pointer",
                position: "relative",

                fontSize: "14px ! important",
                color: "#667085",
              }} // Apply cursor style and set position to relative
              onClick={(e) => {
                if (item.type === "previous") {
                  // Handle previous button click
                  handleChange(e, item.page - 1);
                } else if (item.type === "next") {
                  // Handle next button click
                  handleChange(e, item.page + 1);
                } else {
                  // Handle regular page number click
                  handleChange(e, item.page);
                }
              }}
              slots={{
                previous: CustomPreviousButton,
                next: CustomNextButton,
              }}
              {...item}
            />
          );
        }}
      />
    </Stack>
  );
}
