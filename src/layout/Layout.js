import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "ComponentsRoot";

const Layout = ({totalPrice, totalAmount}) => {
    return (
        <>
            <Header totalPrice={totalPrice} totalAmount={totalAmount}/>
            <Outlet/>
        </>
    )
}

export default Layout;