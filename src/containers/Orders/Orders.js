import React, { useState } from "react";

import { Accordion } from 'ComponentsRoot';
import { OredersWrapper } from './StyledComponents';

const Orders = () => {
    const [toggleOpenContent, setToggleOpenContent] = useState(null);
    
    return (
        <>
            <h1>orders</h1>
            <Accordion
                isOpen={() => }
            />
        </>

    )
}

export default Orders;