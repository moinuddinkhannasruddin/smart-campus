import * as React from "react";
// import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Box from "@components/common/Box";
import CustomButton from "@components/common/CustomButton";
import Text from "@components/common/Text";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useTheme } from "@mui/material/styles";

const data = [
  { label: "Failed", value: 400, color: "#BBE4F5" },
  { label: "Booking done", value: 350, color: "#E6F4FA" },
  { label: "Lead", value: 300, color: "#0D3B4E" },
  { label: "Interested", value: 250, color: "#114C65" },
  { label: "Meeting done", value: 200, color: "#166586" },
  { label: "Visit done", value: 150, color: "#1C7FA8" },
  { label: "Negotation", value: 100, color: "#2198CA" },
];

const sizing = {
  margin: { right: 5 },
  width: 463.29,
  height: 463.29,
  legend: { hidden: true },
};
// const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

// const getArcLabel = (params: DefaultizedPieValueType) => {
//   const percent = params.value / TOTAL;
//   return `${(percent * 100).toFixed(0)}%`;
// };

export default function SalesPipeline({ onClickDrawer }) {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        width="100%"
        height="auto"
        bgcolor="common.white"
        mb={3}
        mt={3}
        pb={3}
      >
        <Grid container width="100%" height="2.5rem" p={3}>
          <Grid item xs={9}>
            <Text variant="subtitle1" children="Sales pipeline" />
          </Grid>

          <Grid item xs={3} display="flex" flexDirection="row">
            <Box>
              <CustomButton
                color="secondary"
                size="medium"
                startIcon={
                  <img
                    src="/assets/icons/downloadicon.svg"
                    alt="Notification-icon"
                    width="24"
                    height="24"
                  />
                }
                sx={{
                  color: theme.palette.grey?.[900],
                  fontSize: theme.typography.fontSize,
                  background: theme.palette.common.white,
                  borderColor: theme.palette.common.border,
                }}
                text="Download"
                xs={6}
              />
            </Box>
            <Box>
              <CustomButton
                color="secondary"
                size="medium"
                startIcon={
                  <img
                    src="/assets/icons/filtericon.svg"
                    alt="Notification-icon"
                    width="24"
                    height="24"
                  />
                }
                sx={{
                  color: theme.palette.grey?.[900],
                  fontSize: theme.typography.fontSize,
                  background: theme.palette.common.white,
                  borderColor: theme.palette.common.border,
                }}
                text="Add Filters"
                xs={6}
                onClick={() => onClickDrawer(true)}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container width="100%" height="2.5rem" pl={15} m={5}>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="secondary.dark"
              sx={{
                width: "70px",
                height: "30px",
                borderRadius: "8px",
              }}
            ></Box>
            <Text variant="caption2" children="Lead" />
          </Grid>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="secondary.light"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Interested" />
          </Grid>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="secondary.contrast"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Meeting done" />
          </Grid>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="primary.main"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="visit done" />
          </Grid>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="primary.light"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Negotiation" />
          </Grid>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="primary.contrast"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Booking done" />
          </Grid>
          <Grid item xs={1.5} align="center">
            <Box
              mb={1}
              bgcolor="#BBE4F5"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Failed" />
          </Grid>
        </Grid>
        <PieChart
          series={[
            {
              outerRadius: 231,
              data,
              // arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </Grid>
    </>
  );
}
