import { useEffect, useState } from 'react';
import './App.css'
import { userModulesData } from "@helpers/dummyBackend";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import NotAuthorized from "@pages/NotAuthorized";
import routeConfig from "@helpers/routeConfig";
import LayoutContainer from "@containers/layout/LayoutContainer";
import { ProtectedRoute } from "@helpers/routes";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {

    const [userModules, setUserModules] = useState([]);

    useEffect(() => {
        const fetchUserModules = async () => {
            try {
                setUserModules(userModulesData);
            } catch (error) {
                console.error("Error fetching user modules:", error);
            }
        };

        fetchUserModules();
    })

    if (userModules.length === 0) {
        return <div>Loading...</div>
    }

    const hasToken = true;

    return (
        <Routes>
            <Route
                path="/" element={hasToken ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
            />

            {/* Public Routes */}
            <Route path="/login" element={<Login />} />

            <Route path="" element={<LayoutContainer />}>

                {routeConfig.map((route, index) => {
                    const hasAccess = userModulesData.some(
                        (module) => module.name === route.name
                    );
                    if (hasAccess) {
                        if (route?.children && route?.children.length) {
                            if (!route.subPath.length) {
                                return (
                                    <Route key={route.path} path={route.path} element={route.component()}>
                                        {route.children.map((itm) => {
                                            return (
                                                <>
                                                    <Route path={itm.path} element={
                                                        <ProtectedRoute
                                                            authToken={hasToken}
                                                            element={itm.component}
                                                        />

                                                    } />
                                                </>
                                            )
                                        })}
                                    </Route>
                                )
                            }
                            return route.subPath.map((itm) => {
                                return (
                                    <>
                                        <Route path={`${route.path}/${itm.path}`} element={
                                            <ProtectedRoute
                                                authToken={hasToken}
                                                element={itm.component}
                                            />


                                        } />
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={
                                                <ProtectedRoute
                                                    authToken={hasToken}
                                                    element={route.component}
                                                />
                                            }
                                        />
                                    </>
                                )
                            })
                        }

                        if (route?.subPath && route?.subPath) {
                            return route.subPath.map((itm) => {
                                return (
                                    <>
                                        <Route path={`${route.path}/${itm.path}`} element={
                                            <ProtectedRoute
                                                authToken={hasToken}
                                                element={itm.component}
                                            />


                                        } />
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            element={
                                                <ProtectedRoute
                                                    authToken={hasToken}
                                                    element={route.component}
                                                />
                                            }
                                        />
                                    </>
                                )
                            })
                        }
                        console.log("EEEEEEEEEE", route.path)
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <ProtectedRoute
                                        authToken={true}
                                        key={route.path}
                                        path={route.path}
                                        element={route.component}
                                    />
                                }
                            />
                        );
                    }
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<NotAuthorized />}
                        />
                    );
                })}

            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
