import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

import Text from "@components/common/Text";

const listItemData = [
  {
    id: 1,
    primaryText: "Complete report creation",
    secondaryText:
      "Includes up to 10 users, 20GB individual data and access to all features.",
    date: "6 Apr 2022",
    user: "Praveenkumar Maurya",
  },
  {
    id: 2,
    primaryText: "Complete report creation",
    secondaryText:
      "Includes up to 10 users, 20GB individual data and access to all features.",
    date: "6 Apr 2022",
    user: "Praveenkumar Maurya",
  },
  {
    id: 3,
    primaryText: "Complete report creation",
    secondaryText:
      "Includes up to 10 users, 20GB individual data and access to all features.",
    date: "6 Apr 2022",
    user: "Praveenkumar Maurya",
  },

  {
    id: 4,
    primaryText: "Complete report creation",
    secondaryText:
      "Includes up to 10 users, 20GB individual data and access to all features.",
    date: "6 Apr 2022",
    user: "Praveenkumar Maurya",
  },
];

const TodosList = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ width: "100%" }}>
      <ListSubheader
        sx={{
          fontSize: theme.typography.subtitle1,
          fontWeight: theme.typography.fontWeightRegular,
          color: theme.palette.grey?.[900],
        }}
      >
        Today’s to-dos
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
              <Stack direction="column">
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

                <Grid container rowSpacing={1}>
                  <Grid item xs={3}>
                    <Stack direction="row" spacing={1}>
                      <img src="/assets/images/calendar.svg" alt="calendar" />
                      <Text
                        sx={{
                          color: theme.palette.error.main,
                          fontSize: theme.typography.fontSize,
                          fontWeight: theme.typography.fontWeightLight,
                        }}
                      >
                        {item.date}
                      </Text>
                    </Stack>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        marginTop: 8,
                        borderRadius: 4,
                        backgroundColor: theme.palette.grey?.[400],
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Stack direction="row" spacing={1} sx={{ marginLeft: -12 }}>
                      <img src="/assets/images/user.svg" alt="user" />
                      <Text
                        sx={{
                          color: theme.palette.grey?.[400],
                          fontSize: theme.typography.fontSize,
                          fontWeight: theme.typography.fontWeightLight,
                        }}
                      >
                        {item.user}
                      </Text>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
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
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        View all
      </ListSubheader>
    </Paper>
  );
};

export default TodosList;
