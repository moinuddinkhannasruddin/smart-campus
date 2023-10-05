import React, { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@components/common/Stack";
import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import WithRouter from "@helpers/withRouter";
import { userModulesData } from "@helpers/dummyBackend";
import { Outlet } from "react-router-dom"
import sidebarRouteConfig from "@helpers/sidebarRouteConfig";

class LayoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: true,
    };
  }
  // Your existing component code

  handleDrawerToggle = (isDrawerExpanded) => {
    this.setState({ isDrawerExpanded });
  };

  handleSidebarClick = (route) => {
    const selectedRoute = sidebarRouteConfig.find((config) => config.path === route);
    if (selectedRoute) {
      this.setState({ selectedValue: selectedRoute.name });
    }
    this.props.router.navigate(route);
  };

  getAuthRoutes = (sidebarRouteConfig, userModulesData) => {
    const result = [];
    sidebarRouteConfig.map((route) => {
      const routes = {
        type: "item",
      };
      const hasAccess = userModulesData.some(
        (module) => module.name === route.name
      );
      if (hasAccess) {
        routes["route"] = route.path;
        routes["primaryText"] = route.name;
        routes["icon"] = route.icon;
        routes["sidebarVisible"] = route.sidebarVisible

        if (route?.type === "accordian") {
          routes["childrens"] = route.children;
          routes["type"] = route.type;
        }
        result.push(routes);
      }
    });

    return result;
  };

  render() {
    const { isDrawerExpanded } = this.state;
    const { children } = this.props;

    const sidebarMenuConfig = this.getAuthRoutes(sidebarRouteConfig, userModulesData);

    return (
      <>
        {/* Modal code */}

        {/* Main layout */}
        <Stack direction="row" sx={{ minHeight: "100vh" }}>
          <Sidebar
            menuConfig={sidebarMenuConfig}
            isDrawerExpanded={isDrawerExpanded}
            onDrawerToggle={this.handleDrawerToggle}
            handleSidebarClick={this.handleSidebarClick}
          />

          <Stack
            sx={{
              flex: 1,
              backgroundColor: {
                xs: "background.paper",
                md: "grey.100",
              },
              width: isDrawerExpanded
                ? "calc(100% - 240px)"
                : "calc(100% - 72px)",
            }}
          >
            <Header
              onDrawerToggle={this.handleDrawerToggle}
              isDrawerExpanded={isDrawerExpanded}
              selectedValue={this.state.selectedValue}
            // ... other Header props
            />
            <Stack
              sx={{
                backgroundColor: "#F2FAFE",
                position: "relative",
                flex: 1,
                maxWidth: "100%",
                px: { xs: 2 },
                py: 2,
                pb: { xs: 2 },
              }}
            >
              <Suspense
                fallback={
                  <Stack
                    sx={{
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      style={{ color: "lightgrey" }}
                      size={50}
                    />
                  </Stack>
                }
              >
                <Outlet />
              </Suspense>
            </Stack>
          </Stack>
        </Stack>
      </>
    );
  }
}

export default WithRouter(LayoutContainer);
