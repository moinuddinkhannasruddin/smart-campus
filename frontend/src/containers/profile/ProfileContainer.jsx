import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { user, employee, project } from "./ProfileData";
import Text from "@components/common/Text";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    width: "100%",
  },
  paper: {
    display: "inline-flex",
    padding: "24px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "32px",
  },
  img: {
    width: "128px",
    height: "128px",
    flexShrink: 0,
    borderRadius: "11.004px",
  },
  icon: {
    marginRight: "-3rem",
    width: "24px",
    height: "24px",
  },
  typography: {
    color: theme.palette.text.primary, // Use the theme's text color
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "28px",
  },
  main: {
    display: "flex",
    width: "1045px",
    height: "152px",
    alignItems: "center",
    gap: "32px",
    borderBottom: "1px solid var(--grey-line, #CBCBCB)",
  },

  mainContainer: {
    display: "flex",
    padding: "0px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
  },
  personal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    gap: "54px",
    justifyContent: "center",
  },
  details: {
    color: "#104960",
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "28px",
    textDecoration: "none",
  },

  button: {
    display: "flex",
    padding: "8px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  header: {
    color: "#667085",
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: "24px",
    fontWeight: 400,
    textTransform: "uppercase",
  },
  value: {
    color: theme.palette.text.primary, // Use the theme's text color
    fontFamily: "Inter",
    lineHeight: "28px",
    alignItems: "flex-start",
  },
  employment: {
    display: "flex",
    alignItems: "center",
    gap: "36px",
    alignSelf: "stretch",
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: "1px solid lightgray",
    gap: "2px",
    paddingRight: "25px",
  },
  employement: {
    display: "flex",
    alignItems: "center",
    gap: "36px",
    alignSelf: "stretch",
  },
  project: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  projects: {
    borderRadius: "88px",
    background: "#E4F7FF",
    display: "flex",
    padding: "4px 16px",
    fontFamily: "Inter",
    fontWeight: 500,
    fontStyle: "normal",
  },
}));

const ProfileContainer = () => {
  const classes = useStyles(); // Apply styles

  return (
    <>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <div className={classes.mainContainer}>
            <div className={classes.main}>
              <img
                src={user.profileImage}
                alt="Profile"
                className={classes.img}
              />
              <div className={classes.personal}>
                <Text variant="typo28medium" className={classes.typography}>
                  {user.name}
                </Text>
                <div className={classes.contact}>
                  <img
                    src="/assets/icons/iconoir_mail.png"
                    className={classes.icon}
                  />
                  <Text
                    variant="typo18"
                    className={classes.details}
                    href={`mailto:${user.email}`}
                  >
                    {user.email}
                  </Text>
                  <img src="/assets/icons/call.png" className={classes.icon} />
                  <Text
                    variant="typo18"
                    className={classes.details}
                    href={`tel:${user.phoneNumber}`}
                  >
                    {user.phoneNumber}
                  </Text>
                  <img
                    src="/assets/icons/location.svg"
                    className={classes.icon}
                  />
                  <Text variant="typo18" className={classes.details}>
                    {user.location}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.employement}>
            {Object.entries(employee).map(([key, value], index) => (
              <div key={index} className={classes.layout}>
                <Text variant="typo14light" className={classes.header}>
                  {key}
                </Text>
                <Text variant="typo18" className={classes.value}>
                  {value}
                </Text>
              </div>
            ))}
          </div>
          <Text variant="typo14light" className={classes.header}>
            Projects
          </Text>
          <div className={classes.project}>
            {project.map((projectName, index) => (
              <div key={index} className={classes.projects}>
                {projectName}
              </div>
            ))}
          </div>
        </Paper>
      </div>
    </>
  );
};

export default ProfileContainer;
