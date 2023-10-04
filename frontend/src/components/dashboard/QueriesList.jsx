import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import { useTheme } from "@mui/material/styles";

import Text from "@components/common/Text";

const listItemData = [
  {
    id: 1,
    primaryText: "Query resolved ",
    secondaryText:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 2,
    primaryText: "You raised a query ",
    secondaryText:
      "Lorem ipsum dolor sit amet, consectetuPorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  },
  {
    id: 3,
    primaryText: "Query resolved ",
    secondaryText:
      "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    id: 4,
    primaryText: "You raised a query ",
    secondaryText:
      "Lorem ipsum dolor sit amet, consectetuPorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac ",
  },
];

const QueriesList = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ width: "100%" }}>
      <ListSubheader
        sx={{
          color: theme.palette.grey?.[900],
          fontSize: theme.typography.subtitle1,
          fontWeight: theme.typography.fontWeightRegular,
        }}
      >
        Queries
      </ListSubheader>
      <List
        sx={{
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
      >
        {listItemData.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Radio color="primary" />
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{
                  color: theme.palette.grey?.[900],
                  fontSize: theme.typography.subtitle1,
                  fontWeight: theme.typography.fontWeightRegular,
                }}
                primary={item.primaryText}
                secondary={
                  <Text
                    variant="h6"
                    style={{
                      color: theme.palette.grey?.[400],
                      fontSize: theme.typography.fontSize,
                      fontWeight: theme.typography.fontWeightLight,
                    }}
                  >
                    {item.secondaryText}
                  </Text>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
      <ListSubheader
        sx={{
          color: theme.palette.primary.light,
          fontSize: theme.typography.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        View all
      </ListSubheader>
    </Paper>
  );
};

export default QueriesList;
