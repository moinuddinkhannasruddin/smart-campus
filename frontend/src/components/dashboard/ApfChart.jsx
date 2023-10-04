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

const uData = [200, 300, 200, 170, 189, 239, 180, 200];
const pData = [240, 139, 280, 190, 220, 280, 160, 220];
const xLabels = [
  "Bank of Baroda",
  "Bank of India",
  "Canara Bank",
  "HDFC Bank",
  "Axis Bank",
  "IDBI Bank",
  "Union Bank",
  "ICICI Bank",
];

const customYAxisValues = [0, 50, 100, 150, 200, 300];

export default function ApfChart({ onClickDrawer }) {
  const theme = useTheme();
  return (
    <>
      <Grid container width="100%" height="40rem" mb={3} bgcolor="common.white">
        <Grid container width="100%" height="2.5rem" p={3}>
          <Grid item xs={9}>
            <Text variant="subtitle1" children="APF disbursed by banks" />
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
              sanction: pData[index],
              disbursed: uData[index],
            }))}
          >
            <XAxis dataKey="name" />
            <YAxis
              tick={customYAxisValues}
              tickFormatter={(value) => `${value}L`}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="sanction" barSize={30} fill="#92D7F4" />
            <Bar dataKey="disbursed" barSize={30} fill="#1A6989" />
          </BarChart>
        </ResponsiveContainer>
      </Grid>
    </>
  );
}
