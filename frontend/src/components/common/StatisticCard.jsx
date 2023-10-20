import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "./Stack";
// import Text from "components/common/Text";
import { useTheme } from "@mui/material/styles";
import Text from "./Text";

const StatisticCard = ({ data, style }) => {
  const theme = useTheme();

  // Check if the style prop is provided, and if not, provide default values
  const cardStyle = style || {
    width: "auto",
    backgroundColor: "white",
    borderColor: "white",
    height: "auto",
    textColor: "black",
  };

  return (
    <Paper
      elevation={1}
      sx={{
        alignItems: "center",
        p: 3,
        width: `${cardStyle.width}`,
        backgroundColor: `${cardStyle.backgroundColor}`,
        border: `1px solid ${cardStyle.borderColor}`,
        height: `${cardStyle.height}`,
      }}
    >
      <Text
        variant="typo14light"
        color={cardStyle.textColor}
        sx={{
          marginBottom: 2,
        }}
      >
        {data.name}
      </Text>
      <Stack direction="row" justifyContent={"space-between"}>
        <Text variant="typo24medium" color={cardStyle.textColor}>
          {data.value}
        </Text>
        {/* <img src={data.chart} alt="chart" min-width="128px" width={width} /> */}
      </Stack>
    </Paper>
  );
};

export default StatisticCard;
