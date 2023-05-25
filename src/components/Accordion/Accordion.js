import React from "react";

import { AccordionWrapper, AccordionItem, AccordionHeader, AccordionBody, AccordionContent, HeaderItem, } from './StyledComponents';

const Accordion = ({ isOpen, setActiveId, order, header, children }) => {

    return (
        <AccordionWrapper>
            <AccordionItem>
                <AccordionHeader onClick={() => setActiveId(order?.orderId)}>
                    {
                        header && header.map((headerItem, index )=> (
                            <HeaderItem key={index}>{headerItem}</HeaderItem>
                        ))
                    }
                </AccordionHeader>
                <AccordionBody isOpenContent={isOpen}>
                    <AccordionContent>
                       {children}
                    </AccordionContent>
                </AccordionBody>
            </AccordionItem>
        </AccordionWrapper>
    )
}

export default Accordion;