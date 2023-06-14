/* eslint-disable import/no-cycle */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import iconSvg from 'AssetsRoot/svg/iconSvg';
import defaultAvatar from 'AssetsRoot/img/defaultAvatar.png';
import loadingImg from 'AssetsRoot/svg/spinerLoading.svg';
import { SvgIcon, Img } from 'ComponentsRoot';
import {
  TableContent,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableRowItem,
} from './StyledComponents';

const Table = ({ tableData, handleDelete, header }) => (
  <TableContent>
    <TableHeader>
      {header && header?.map((item) => (
        <TableHeaderItem key={item}>{item}</TableHeaderItem>
      ))}
    </TableHeader>
    {
      tableData && tableData.map((item) => (
        <TableRow key={item?.id}>
          <TableRowItem>{item?.name}</TableRowItem>
          <TableRowItem>{item?.email}</TableRowItem>
          <TableRowItem>{item?.phone}</TableRowItem>
          <TableRowItem>
            <Img
              width="35px"
              height="35px"
              borderRadius="50%"
              src={item?.avatarUrl}
              loadingImg={loadingImg}
              errorImg={defaultAvatar}
              alt="avatar"
            />
          </TableRowItem>
          <TableRowItem>{item?.role}</TableRowItem>
          <TableRowItem>
            <SvgIcon
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              path={iconSvg.trash}
              fill="#fff"
              strokeHover="#373737"
              stroke="#B6B6B6"
              handleClick={() => handleDelete(item?.id)}
            />
          </TableRowItem>
        </TableRow>
      ))
    }
  </TableContent>
);

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string,
    phone: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func,
};

Table.defaultProps = {
  handleDelete: () => {},
};

export default memo(Table);
