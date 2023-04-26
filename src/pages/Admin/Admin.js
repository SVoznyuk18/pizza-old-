import React from "react";

import { Tabs } from 'ComponentsRoot';
import { CreateNewCart, ManagersList, Orders } from 'ContainersRoot';
import { Container } from './StyledComponents';

const Admin = () => {

    return (
        <Container>
            <Tabs
                tabs={
                    [
                        {
                            id: 0,
                            label: 'Managers',
                            content: <ManagersList />
                        },
                        {
                            id: 1,
                            label: 'create new cart',
                            content: <CreateNewCart />
                        },
                        {
                            id: 2,
                            label: 'Orders',
                            content: <Orders />
                        }
                    ]
                }
            />
        </Container>

    )
}

export default Admin;


