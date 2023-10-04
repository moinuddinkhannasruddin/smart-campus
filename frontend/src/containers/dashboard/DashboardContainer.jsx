import React from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import DashboardHeader from "@components/dashboard/DashboardHeader";
import DashboardCards from "@components/dashboard/DashboardCards";
import TodosList from "@components/dashboard/TodosList";
import QueriesList from "@components/dashboard/QueriesList";
import SideDrawer from "@components/dashboard/SideDrawer";
import SalesPipeline from "@components/dashboard/SalesPipeline";
import BookingStatusChart from "@components/dashboard/BookingStatusChart";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Paper from "@mui/material/Paper";
import Text from "@components/common/Text";
import { withTheme } from "@mui/styles";
import ApfChart from "@components/dashboard/ApfChart";
import ApfBalanceChart from '@components/dashboard/ApfBalanceChart';
import AmountDisbursedChart from "@components/dashboard/AmountDisbursedChart";
import PaymentPlanChart from "@components/dashboard/PaymentPlanChart";

const data = [
  {
    id: 1,
    name: "Unit sold",
    value: 25,
    chart: "/assets/images/_ChartSuccess.svg",
  },
  {
    id: 2,
    name: "Unit for  sale",
    value: 40,
    chart: "/assets/images/_ChartSuccess.svg",
  },
  {
    id: 3,
    name: "Booked unit",
    value: 200,
    chart: "/assets/images/_ChartError.svg",
  },
  {
    id: 4,
    name: "Customers",
    value: 180,
    chart: "/assets/images/_ChartError.svg",
  },
];

const filter = ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "Weekly"];
class DashboardContainer extends React.Component {
  constructor() {
    super();
    this.state = { open: false, radioValue: "" };
  }

  componentDidMount() { }

  handleChart = (value) => {
    this.setState({ open: value });
  };

  handleRadioChange = (event) => {
    this.setState({ radioValue: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ radioValue: "" });
  };

  render() {
    const { open } = this.state;
    const { theme } = this.props;
    return (
      <Stack sx={{ backgroundColor: "#F2FAFE" }}>
        <Grid container spacing={3} p={3}>
          <Grid item xs={12}>
            <DashboardHeader />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              {data.map((element, index) => {
                return (
                  <DashboardCards key={"cards_index_" + index} data={element} />
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <TodosList />
          </Grid>
          <Grid item xs={6}>
            <QueriesList />
          </Grid>
          <Grid item xs={12}>
            <SalesPipeline onClickDrawer={this.handleChart} />
          </Grid>
          <Grid item xs={12}>
            <BookingStatusChart onClickDrawer={this.handleChart} />
          </Grid>
          <Grid item xs={12}>
            <ApfChart onClickDrawer={this.handleChart} />
          </Grid>
          <Grid item xs={12}>
            <AmountDisbursedChart onClickDrawer={this.handleChart} />
          </Grid>
          <Grid item xs={12}>
            <ApfBalanceChart onClickDrawer={this.handleChart} />
          </Grid>
          <Grid item xs={12}>
            <PaymentPlanChart onClickDrawer={this.handleChart} />
          </Grid>
          <SideDrawer
            open={open}
            closeDrawer={this.handleChart}
            title="Filter"
            subtitle=" See the data in an organized manner by applying filters"
            contentTitle="Time Period"
            cancel="Cancel"
            apply="Apply"
            submit={this.handleSubmit}
          >
            {filter.map((data, index) => (
              <Paper key={index} variant="outlined" sx={{ padding: "10px" }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Text
                    sx={{
                      color: theme.palette.grey?.[900],
                      fontSize: theme.typography.subtitle1,
                      fontWeight: theme.typography.fontWeightLight,
                      lineHeight: "normal",
                    }}
                  >
                    {data}
                  </Text>
                  <FormControl variant="standard">
                    <RadioGroup
                      aria-labelledby="filter"
                      name="filter"
                      value={this.state.radioValue}
                      onChange={this.handleRadioChange}
                    >
                      <FormControlLabel value={data} control={<Radio />} />
                    </RadioGroup>
                  </FormControl>
                </Stack>
              </Paper>
            ))}
          </SideDrawer>
        </Grid>
      </Stack>
    );
  }
}

export default withTheme(DashboardContainer);
