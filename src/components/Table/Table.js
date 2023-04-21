import React from "react";

import {Img} from 'ComponentsRoot';

import {TableContent, TableHeader, TableHeaderItem, TableRow, TableRowItem} from './StyledComponents';

const header = ['email', 'name', 'userAvatar', 'role', 'Действия'];

const docData =[
    {
        email: 'admin@gmail.com',
        name: 'Admin Admin',
        id: 1,
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/vozniuk-pizza.appspot.com/o/Pizza%2Fpepperoni.jpg?alt=media&token=290479c0-8277-4532-8447-781fb6144971',
        role: 'admin'
    },
    {
        email: 'serg@gmail.com',
        name: 'Serhii Vozniuk',
        id: 2,
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/vozniuk-pizza.appspot.com/o/Pizza%2Fpepperoni.jpg?alt=media&token=290479c0-8277-4532-8447-781fb6144971',
        role: 'manager'
    },
    {
        email: 'adriy@gmail.com',
        name: 'Aadriy Admin',
        id: 3,
        userAvatar: 'https://firebasestorage.googleapis.com/v0/b/vozniuk-pizza.appspot.com/o/Pizza%2Fpepperoni.jpg?alt=media&token=290479c0-8277-4532-8447-781fb6144971',
        role: 'manager'
    }
]

const Table = () => {
    return (
        <TableContent>
            <TableHeader>
                {header && header.map((item, index) => (
                    <TableHeaderItem key={index}>{item}</TableHeaderItem>
                ))}
            </TableHeader>
          
                {
                    docData && docData.map(item => (
                        <TableRow key={item.id}>
                            <TableRowItem>{item.name}</TableRowItem>
                            <TableRowItem>{item.email}</TableRowItem>
                            <TableRowItem><Img width='35px' height='35px' borderRadius='50%' src={item.userAvatar} alt='avatar'/></TableRowItem>
                            <TableRowItem>{item.role}</TableRowItem>
                            <TableRowItem>Tools</TableRowItem>
                        </TableRow>
                    ))
                }
                
           
        </TableContent>
   
    )
}

export default Table;