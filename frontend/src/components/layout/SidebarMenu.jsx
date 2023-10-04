import React from "react";
import {createStyles, makeStyles} from "@mui/styles";
import {alpha} from "@mui/material/styles";
import List from "../common/List";
import Divider from "../common/Divider";
import ListItem from "../common/ListItem";
import Text from "@components/common/Text";
import cx from "classnames";
import IconButton from "@components/common/IconButton";
import ListItemText from "@components/common/ListItemText";
import ListItemIcon from "@components/common/ListItemIcon";
import ListItemButton from "@components/common/ListItemButton";
import ListItemSecondaryAction from "@components/common/ListItemSecondaryAction";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import {Link} from "react-router-dom";

const SidebarMenu = (props) => {
    const {menuConfig = [], isDrawerExpanded, handleSidebarClick} = props;
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState();
    const handleChange =
        (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <List
            classes={{
                root: classes.listRoot,
            }}
        >
            {menuConfig.map((item, index) => {
                const {
                    type,
                    onClick = () => {
                    },
                    primaryText,
                    secondaryText = "",
                    icon = null,
                    secondaryAction = "",
                    isActive = false,
                    isDisabled = false,
                    avatar,
                    logoUrl = "",
                    children = [],
                    route,
                    childrens,
                    sidebarVisible,
                } = item;
                const key = `${type}__${index}`;

                if (type === "item" && sidebarVisible !== false) {
                    if (isDrawerExpanded) {
                        return (
                            <ListItem
                                onClick={() => handleSidebarClick(route)}
                                key={key}
                                sx={{py: 0}}
                            >
                                <ListItemButton
                                    onClick={onClick}
                                    disabled={isDisabled}
                                    classes={{
                                        root: cx({
                                            [classes.listItemRoot]: true,
                                            [classes.listItemActive]: isActive,
                                        }),
                                    }}
                                >
                                    {icon && (
                                        <ListItemIcon classes={{root: classes.listItemIconRoot}}>
                                            {icon}
                                        </ListItemIcon>
                                    )}
                                    <ListItemText
                                        primary={primaryText}
                                        secondary={secondaryText}
                                        classes={{
                                            primary: cx({
                                                [classes.listItemPrimaryText]: true,
                                                [classes.listItemPrimaryTextActive]: isActive,
                                            }),
                                            secondary: cx({
                                                [classes.listItemSecondaryText]: true,
                                                [classes.listItemSecondaryTextActive]: isActive,
                                            }),
                                        }}
                                    />
                                    {secondaryAction ? (
                                        <ListItemSecondaryAction>
                                            {secondaryAction}
                                        </ListItemSecondaryAction>
                                    ) : null}
                                </ListItemButton>
                            </ListItem>
                        );
                    }
                    return (
                        <ListItem
                            onClick={() => handleSidebarClick(route)}
                            key={key}
                            sx={{px: 1.5, py: 0}}
                        >
                            <ListItemButton
                                onClick={onClick}
                                disabled={isDisabled}
                                classes={{
                                    root: cx({
                                        [classes.listItemCollapsedRoot]: true,
                                        [classes.listItemActive]: isActive,
                                    }),
                                }}
                            >
                                {icon && (
                                    <IconButton
                                        classes={{root: classes.listItemIconCollapsedRoot}}
                                    >
                                        {icon}
                                    </IconButton>
                                )}
                            </ListItemButton>
                        </ListItem>
                    );
                }

                if (type === "accordian") {
                    return (
                        <MuiAccordion className={classes.Accordianroot} key={`${key}_${primaryText}`}
                                      expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                                      sx={{background: "transparent", boxShadow: "none"}}>

                            <MuiAccordionSummary sx={{background: "transparent", paddingLeft: "29px"}} className="two"
                                                 aria-controls="panel1d-content" id="panel1d-header">
                                {icon && (
                                    <ListItemIcon classes={{root: classes.listItemIconRoot}}>
                                        {icon}
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    primary={primaryText}
                                    secondary={secondaryText}
                                    classes={{
                                        primary: cx({
                                            [classes.listItemPrimaryText]: true,
                                            [classes.listItemPrimaryTextActive]: isActive,
                                        }),
                                        secondary: cx({
                                            [classes.listItemSecondaryText]: true,
                                            [classes.listItemSecondaryTextActive]: isActive,
                                        }),
                                    }}
                                />
                            </MuiAccordionSummary>

                            {childrens?.length && childrens.map((itm, i) => {
                                return (
                                    <MuiAccordionDetails
                                        className="three"
                                        key={`${key}_${itm.name} `}
                                        sx={{paddingLeft: "39px"}}
                                    >
                                        <Link to={`${route}/${itm.path}`}>
                                            <Text
                                                variant="subtitle1"
                                                sx={{color: "#fff", cursor: "pointer"}}
                                            >
                                                {itm.name}
                                            </Text>
                                        </Link>
                                    </MuiAccordionDetails>
                                )
                            })}


                        </MuiAccordion>
                    )
                }

                if (type === "header") {
                    // ... your item type logic
                }
                if (type === "divider") {
                    return (
                        <ListItem key={key} className={classes.divider}>
                            <Divider/>
                        </ListItem>
                    );
                }
                if (type === "spacer") {
                    return <ListItem key={key} className={classes.spacer}/>;
                }
                if (type === "dropdown") {
                    // ... your dropdown type logic
                }
                if (type === "broker") {
                    // ... your broker type logic
                }
                console.log(`${item.type} is not supported by SidebarMenu`);
                return null;
            })}
        </List>
    );
};
const useStyles = makeStyles((theme) =>
    createStyles({
        Accordianroot: {
            "& .MuiAccordion-region": {
                minHeight: 0,
                margin: "13px",
                backgroundColor: "#26A9E11A",
                borderRadius: "6px"
            },
        },


        listRoot: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingBottom: 0,
        },
        listItemRoot: {
            borderRadius: `${theme.spacing(1)} !important`,
            paddingLeft: `${theme.spacing(1.5)} !important`,
            paddingRight: `${theme.spacing(1.5)} !important`,
            marginBottom: `${theme.spacing(1)} !important`,
            // marginTop:`${theme.spacing(0.5)} !important`,
            "&:hover": {
                backgroundColor: `${alpha(
                    theme.palette.secondary.main,
                    0.18
                )} !important`,
            },
            "&:active": {
                backgroundColor: `${theme.palette.primary.light} !important`,
            },
        },
        listItemCollapsedRoot: {
            borderRadius: `${theme.spacing(1)} !important`,
            paddingLeft: `${theme.spacing(0.7)} !important`,
            paddingRight: `${theme.spacing(1)} !important`,
            display: "flex",
            justifyContent: "center",
            "&:hover": {
                backgroundColor: `${alpha(
                    theme.palette.secondary.main,
                    0.18
                )} !important`,
            },
            "&:active": {
                backgroundColor: `${theme.palette.primary.light} !important`,
            },
        },
        listItemActive: {
            backgroundColor: "red !important",
        },

        listItemAvatarRoot: {
            minWidth: "18px !important",
            marginRight: "12px",
        },
        listItemIconRoot: {
            minWidth: "18px !important",
            marginRight: "12px",
        },
        listItemIconCollapsedRoot: {
            minWidth: "24px !important",
            marginRight: "0px !important",
        },

        listItemPrimaryText: {
            fontSize: `${theme.typography.typo16.fontSize} !important`,
            color: "#fff !important",
            lineHeight: `${theme.typography.body2.lineHeight} !important`,
        },
        listItemPrimaryTextActive: {
            color: `${theme.palette.primary.light} !important`,
            fontWeight: `500 !important`,
        },

        listItemSecondaryText: {
            fontSize: `${theme.typography.typ016} !important`,
            color: "#252C32 !important",
            lineHeight: `${theme.typography.body2.lineHeight} !important`,
            maxWidth: "130px",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        listItemSecondaryTextActive: {
            color: `${theme.palette.primary.main} !important`,
        },
        routes: {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: `${theme.palette.secondary.main} !important`,
        },
        textSpacing: {
            marginLeft: "10px",
        },
        spacer: {
            flexGrow: 1,
        },
        divider: {
            display: "block !important",
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
        },
    })
);

export default React.memo(SidebarMenu);
