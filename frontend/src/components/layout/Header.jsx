import MenuIcon from "@mui/icons-material/MenuOutlined";
import {createStyles, makeStyles} from "@mui/styles";
import React from "react";
import {useNavigate} from "react-router-dom";
import AppBar from "../common/AppBar";
import IconButton from "../common/IconButton";
import Menu from "../common/Menu";
import Text from "../common/Text";
import ToolBar from "../common/ToolBar";

const Header = (props) => {
    const {isDrawerExpanded, onDrawerToggle, selectedValue} = props;
    const classes = useStyles();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate("/profile");
    };

    return (
        <>
            <AppBar
                className={classes.appBarRoot}
                position="sticky"
                elevation={1.5}
                sx={{display: "flex", flexDirection: "row"}}
            >
                <ToolBar sx={{display: {xs: "auto", lg: "none"}}}>
                    {isDrawerExpanded ? null : (
                        <IconButton onClick={onDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>
                    )}
                </ToolBar>
                <ToolBar sx={{display: "flex", justifyContent: "space-between"}}>
                    <ToolBar className={classes.toolbarText}>
                        <Text variant="body4" className={classes.appBarText}>
                            {selectedValue}
                        </Text>
                    </ToolBar>
                    {/* <ToolBar>
            <Link to="/add-project" sx={{ textDecoration: "none !important" }}>
              <Button className={classes.addProjectButton}>
                <span className={classes.addSign}>+</span>
                <span className={classes.addProjectText}>Add Project</span>
              </Button>
            </Link>
          </ToolBar> */}
                </ToolBar>
                <ToolBar className={classes.toolBarRoot}>
                    <img
                        src="/assets/icons/NotificationIcon.svg"
                        alt="Notification-icon"
                        width="24"
                        height="24"
                    />

                    <img
                        src="/assets/images/Avatar.jpg"
                        alt="Profile-logo"
                        width="40"
                        height="40"
                        onClick={handleProfileClick}
                    />
                    <Menu
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    width: 10,
                                    height: 10,
                                    bgColor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                    ></Menu>
                    {/* </Stack> */}
                </ToolBar>
            </AppBar>
        </>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        appBarRoot: {
            backgroundColor: `${theme.palette.common.white} !important`,
            color: "#1e1e1e !important",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "4rem",
            boxShadow: "0px 0px 10px #ebebeb",
        },
        toolBarRoot: {
            justifyContent: "space-between",
            width: "8rem",
        },
        toolbarText: {
            marginLeft: "0rem",
        },
        addProjectButton: {
            width: "128px !important",
            height: "36px !important",
            border: "1px solid #104960 !important",
            borderRadius: "8px !important",
            display: "flex",
            alignItems: "center",
            textTransform: "capitalize !important",
            padding: "8px 16px !important",
            color: "#104960 !important",
            fontWeight: "600 !important",
            textDecoration: "none !important",
        },
        addSign: {
            width: "20px !important",
            height: "20px !important",
            lineHeight: "20px",
            fontSize: "17px",
        },
        addProjectText: {
            height: "20px !important",
            fontSize: "13px",
        },
    })
);

export default React.memo(Header);
