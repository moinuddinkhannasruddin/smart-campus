import * as React from "react";
// import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Box from "@components/common/Box";
import CustomButton from "@components/common/CustomButton";
import Text from "@components/common/Text";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useTheme } from "@mui/material/styles";

const data = [
  { label: "Construction Plan (30)", value: 300, color: "#0D3B4E" },
  { label: "Down Payment Plan (30)", value: 250, color: "#114C65" },
  { label: "Time Linked Plan (30)", value: 200, color: "#166586" },
  { label: "Flexi Payment Plan (30)", value: 150, color: "#1C7FA8" },
  { label: "Flexi Payment Plan (30)", value: 150, color: "#1C7FA8" },
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

export default function PaymentPlanChart({ onClickDrawer }) {
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
            <Text
              variant="subtitle1"
              children="Payment plan wise units booked"
            />
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
          <Grid item xs={2} align="center">
            <Box
              mb={1}
              bgcolor="secondary.dark"
              sx={{
                width: "70px",
                height: "30px",
                borderRadius: "8px",
              }}
            ></Box>
            <Text variant="caption2" children="Construction Plan (30)" />
          </Grid>
          <Grid item xs={2.5} align="center">
            <Box
              mb={1}
              bgcolor="secondary.light"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Down Payment Plan (30)" />
          </Grid>
          <Grid item xs={2} align="center">
            <Box
              mb={1}
              bgcolor="secondary.contrast"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Time Linked Plan (30)" />
          </Grid>
          <Grid item xs={2.5} align="center">
            <Box
              mb={1}
              bgcolor="primary.main"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Flexi Payment Plan (30)" />
          </Grid>
          <Grid item xs={2.5} align="center">
            <Box
              mb={1}
              bgcolor="primary.main"
              sx={{ width: "70px", height: "30px", borderRadius: "8px" }}
            ></Box>
            <Text variant="caption2" children="Flexi Payment Plan (30)" />
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
