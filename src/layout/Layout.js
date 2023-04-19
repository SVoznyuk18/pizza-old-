import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "ComponentsRoot";

const Layout = ({totalPrice, totalAmount, accessToken, email, name, }) => {
    return (
        <>
            <Header totalPrice={totalPrice} totalAmount={totalAmount} accessToken={accessToken}/>
            <Outlet/>
        </>
    )
}

export default Layout;