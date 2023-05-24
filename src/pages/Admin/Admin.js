import React from "react";

import { Tabs } from 'ComponentsRoot';
import { AddNewProduct, ManagersList, Orders } from 'ContainersRoot';
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
                            label: 'Add New Product',
                            content: <AddNewProduct />
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


