import React from "react";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import Text from "@components/common/Text";
import { useTheme } from "@mui/material/styles";

const DashboardCards = (props) => {
  const theme = useTheme();
  const { data, height, width, color } = props;

  return (
    <Paper
      elevation={1}
      sx={{
        alignItems: "center",
        p: 3,
        width: "100%",
        backgroundColor: `${data.backgroundColor}`,
        border: `1px solid ${data.borderColor}`,
        height: `${height}`,
      }}
    >
      <Text
        variant="typo14"
        color={color}
        sx={{
          marginBottom: 2,
        }}
      >
        {data.name}
      </Text>
      <Stack direction="row" justifyContent={"space-between"}>
        <Text variant="typo24" color={color}>{data.value}</Text>
        {/* <img src={data.chart} alt="chart" min-width="128px" width={width} /> */}
      </Stack>
    </Paper>
  );
};

export default DashboardCards;
