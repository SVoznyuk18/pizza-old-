import React, { memo } from "react";

import { Img } from 'ComponentsRoot';

import { TableContent, TableHeader, TableHeaderItem, TableRow, TableRowItem } from './StyledComponents';
import { SvgIcon } from 'ComponentsRoot';
import iconSvg from 'AssetsRoot/svg/iconSvg';
import { colors } from "ConfigsRoot/colors"

const header = ['name', 'email', 'phone', 'userAvatar', 'role', 'tools'];

const Table = ({ tableData, handleDelete }) => {
    return (
        <TableContent>
            <TableHeader>
                {header && header?.map((item, index) => (
                    <TableHeaderItem key={index}>{item}</TableHeaderItem>
                ))}
            </TableHeader>

            {
                tableData && tableData.map(item => (
                    <TableRow key={item?.id}>
                        <TableRowItem>{item?.name}</TableRowItem>
                        <TableRowItem>{item?.email}</TableRowItem>
                        <TableRowItem>{item?.phone}</TableRowItem>
                        <TableRowItem><Img width='35px' height='35px' borderRadius='50%' src={item?.avatarUrl} alt='avatar' /></TableRowItem>
                        <TableRowItem>{item?.role}</TableRowItem>
                        <TableRowItem>
                            <SvgIcon
                                width='20px'
                                height='20px'
                                viewBox='0 0 490 490'
                                fill={colors.green}
                                path={iconSvg.check}
                                handleClick={() => handleDelete(item?.id)}
                            />

                        </TableRowItem>
                    </TableRow>
                ))
            }
        </TableContent>

    )
}

export default memo(Table);