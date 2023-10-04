import React from "react";
import {createStyles, makeStyles, useTheme} from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SidebarMenu from "./SidebarMenu";
import Drawer from "../common/Drawer";
import cx from "classnames";
import Box from "../common/Box";

const Sidebar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const MEDIA_LG_UP = useMediaQuery(theme.breakpoints.up("lg"));
    const {
        isDrawerExpanded,
        onDrawerToggle,
        menuConfig = [],
        handleSidebarClick,
    } = props;

    return (
        <Drawer
            variant={MEDIA_LG_UP ? "permanent" : "temporary"}
            open={isDrawerExpanded}
            onClose={() => onDrawerToggle(false)}
            className={classes.DrawerHeight}
            classes={{
                root: cx({
                    [classes.drawerRoot]: true,
                    [classes.drawerExpanded]: isDrawerExpanded,
                    [classes.drawerCollapsed]: !isDrawerExpanded,
                }),
                paper: cx({
                    [classes.drawerPaper]: true,
                    [classes.drawerExpanded]: isDrawerExpanded,
                    [classes.drawerCollapsed]: !isDrawerExpanded,
                }),
            }}
        >
            {isDrawerExpanded ? (
                <Box
                    className={cx({
                        [classes.drawerHeader]: true,
                        [classes.drawerHeaderExpanded]: isDrawerExpanded,
                    })}
                    onClick={() => onDrawerToggle(false)}
                >
                    <img
                        src="/assets/images/GetKreditLogo.jpg"
                        alt="GKredit"
                        width="auto"
                        height={38}
                        classes={{root: classes.logoWrap}}
                    />

                    <img
                        src="/assets/icons/MenuIcon.svg"
                        alt="menu-icon"
                        width="19"
                        height="16"
                    />
                </Box>
            ) : (
                <Box
                    className={cx({
                        [classes.drawerHeader]: true,
                        [classes.drawerHeaderCollapsed]: !isDrawerExpanded,
                    })}
                    onClick={() => onDrawerToggle(true)}
                >
                    <img
                        src="/assets/icons/MenuIcon.svg"
                        alt="menu-icon"
                        width="19"
                        height="16"
                    />
                </Box>
            )}

            <SidebarMenu
                isDrawerExpanded={isDrawerExpanded}
                menuConfig={menuConfig}
                handleSidebarClick={handleSidebarClick}
            />
        </Drawer>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        logoWrap: {display: "block", marginLeft: "8px", maxWidth: "150px"},
        drawerRoot: {
            flexShrink: 0,
        },
        drawerPaper: {
            width: "15rem",
            border: `0 !important`,
            backgroundColor: `${theme.palette.primary.main} !important`,
        },
        drawerExpanded: {
            width: "15rem",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerCollapsed: {
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: "hidden",
            width: theme.spacing(9),
        },
        drawerHeader: {
            display: "flex",
            alignItems: "center",
            backgroundColor: `${theme.palette.common.white} !important`,
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        drawerHeaderExpanded: {
            justifyContent: "space-between",
            backgroundColor: `${theme.palette.common.white} !important`,
        },
        drawerHeaderCollapsed: {
            justifyContent: "center",
        },
        Logout: {
            position: "sticky",
            marginBottom: "0px",
        },
    })
);

export default React.memo(Sidebar);
