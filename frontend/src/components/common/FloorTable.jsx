import React from "react";
import Text from "./Text";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";


const cellStyle = {
    booking: {
        backgroundColor: "#104960",
        borderLeftStyle: "solid",
        borderLeftWidth: "8px",
        borderLeftColor: "#25A9E0",
    },
    includesParking: {
        backgroundColor: "#104960",
        borderLeftStyle: "solid",
        borderLeftWidth: "8px",
        borderLeftColor: "#25A9E0",
    },
    booked: {
        backgroundColor: "#104960",
    },
    residential: {
        backgroundColor: "#F2FAFE",
        border: "1px solid #CBCBCB",
    },
    hold: {
        backgroundColor: "#F2FAFE",
        border: "2px solid #25A9E0",
    },
    commercial: {
        backgroundColor: "#FFD684",
        border: "1px solid #CBCBCB",
    },
};

const roomType = {
    commercial: cellStyle.commercial,
    hold: cellStyle.hold,
    residential: cellStyle.residential,
    booked: cellStyle.booked,
    includesParking: cellStyle.includesParking,
};

const textStyle = {
    booked: {
        color: "#FFFFFF",
    },
    includesParking: {
        color: "#FFFFFF",
    },
    residential: {
        color: "#104960",
    },
    hold: {
        color: "#25A9E0",
    },
    commercial: {
        color: "#104960",
    },
};

const Floors = ({ floorPosition = "" }) => {
    return (
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: "91px",
                height: "80px",
                // borderRadius: "8px",
                backgroundColor: "#E4F7FF",
                borderBottomStyle: "solid",
                borderBottomWidth: "4px",
                borderBottomColor: "#25A9E0",
                // ...roomType[variant]
            }}
        >
            <Text variant="subtitle1">{floorPosition}</Text>
        </Stack>
    );
};

const Cell = ({ variant = "", flatLabel = "" }) => {
    return (
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: "76px",
                height: "48px",
                borderRadius: "8px",
                margin: "16px 8px",
                cursor:"pointer",
                ...roomType[variant],
            }}
                    >
            <Text
                variant="subtitle1"
                sx={{ color: "#104960", ...textStyle[variant] }}
            >
                {flatLabel}
            </Text>
        </Stack>
    );
};

const FloorTable = ({ res,handleClick }) => {
    return (
        <div>
            {res.map((item, i) => {
                return (
                    <Grid display="flex" flexDirection="row" alignItems="center">
                        {item.floorPosition && (
                            <Floors floorPosition={item.floorPosition} />
                        )}
                        <Grid
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            sx={{
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1px",
                                borderBottomColor: "#EAECF0",

                                borderTopStyle: "solid",
                                borderTopWidth: "1px",
                                borderTopColor: "#EAECF0",
                            }}
                        >
                            {item.flats.length ? (
                                item.flats.map((data, idx) => {
                                    return (
                                        <div onClick={()=> handleClick(data)}>
                                            <Cell
                                                variant={data.flatStatus}
                                                flatLabel={data.flatLabel}
                                            />
                                        </div>
                                    );
                                })
                            ) : (null)}

                        </Grid>
                    </Grid>
                );
            })}
        </div>
    );
};

export default FloorTable;
