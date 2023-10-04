import React from "react";
import Stack from "components/common/Stack";
import Text from 'components/common/Text';
import { makeStyles } from "@mui/styles";


const Header = ({ label, image, CustomButton }) => {
  const classes = useStyles();
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      className={classes.formHeading}
    >
      <div className={classes.leftContent}>
        <img src={image} alt={label} width="24" height="24" className={classes.image} />
        <Text variant="body2" className={classes.label}>{label}</Text>
      </div>
      <div className={classes.rightContent}>
        {CustomButton &&
          CustomButton.map((CustomButton, index) => (
            <div key={index} className={classes.buttonContainer}>{CustomButton}</div>
          ))}
      </div>
    </Stack>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  formHeading: {
    backgroundColor: `${theme.palette.secondary.main}`,
    padding: "0.9rem 1.5rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
  },
  leftContent: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginRight: theme.spacing(1),
  },
  label: {
    marginRight: theme.spacing(1),
  },

  rightContent: {
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    marginLeft: theme.spacing(2),
  },
}));