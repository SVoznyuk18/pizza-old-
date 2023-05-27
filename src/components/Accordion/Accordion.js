import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import {
  AccordionWrapper,
  AccordionHeader,
  AccordionBody,
  HeaderItem,
} from './StyledComponents';

const Accordion = ({ header, children }) => {
  const [isShowBody, setIsShowBody] = useState(false);

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setIsShowBody(!isShowBody)}>
        {header && header.map((headerItem) => (
          <HeaderItem key={uuidv4()}>{headerItem}</HeaderItem>
        ))}
      </AccordionHeader>
      <AccordionBody isShowBody={isShowBody}>{children}</AccordionBody>
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Accordion.defaultProps = {
  header: [],
};

export default Accordion;
