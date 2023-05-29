import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "ContainersRoot";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;
