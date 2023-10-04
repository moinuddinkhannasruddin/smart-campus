import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Box from "@components/common/Box";
import CustomButton from "@components/common/CustomButton";
import Text from "@components/common/Text";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { useTheme } from "@mui/material/styles";

const uData = [200, 300, 200, 270, 189, 239, 200, 300, 200, 270, 189, 239, 349];
const pData = [240, 139, 980, 390, 480, 380, 240, 139, 980, 390, 480, 380, 430];
const xLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const customYAxisValues = [0, 200, 400, 600, 800, 1000];

export default function BookingStatusChart({ onClickDrawer }) {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        width="100%"
        height="40rem"
        mb={3}
        bgcolor="common.white"
      >
        <Grid container width="100%" height="2.5rem" p={3}>
          <Grid item xs={9}>
            <Text variant="subtitle1" children="Booking status" />
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
        <ResponsiveContainer width="90%" height="60%">
          <BarChart
            data={xLabels.map((label, index) => ({
              name: label,
              Lead: pData[index],
              Booking: uData[index],
            }))}
          >
            <XAxis dataKey="name" />
            <YAxis tick={customYAxisValues} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Lead" fill="#92D7F4" />
            <Bar dataKey="Booking" fill="#1A6989" />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </>
  );
}
