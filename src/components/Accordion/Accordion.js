import React from "react";

import { AccordionWrapper, AccordionItem, AccordionHeader, AccordionBody, AccordionContent } from './StyledComponents';

const Accordion = ({ isOpen, setActiveId, order }) => {

    return (
        <AccordionWrapper>
            <AccordionItem>
                <AccordionHeader onClick={() => setActiveId(order?.orderId)} >{order?.clientInfo?.name}</AccordionHeader>
                <AccordionBody isOpenContent={isOpen}>
                    <AccordionContent>
                        {/* {order?.orderInfo?.totalPrice} */}
                        2xx — успішна обробка. Запит було отримано та успішно оброблено сервером.
                        3xx — перенаправлення (редирект). ...
                        4xx — помилка клієнта. ...
                        5xx — помилка сервера.

                    </AccordionContent>
                </AccordionBody>
            </AccordionItem>
        </AccordionWrapper>
    )


}

export default Accordion;