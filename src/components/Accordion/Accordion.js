import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  AccordionWrapper,
  AccordionHeader,
  AccordionBody,
  HeaderItem,
} from "./StyledComponents";

const Accordion = ({ header, children }) => {
  const [isShowBody, setIsShowBody] = useState(false);

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setIsShowBody(!isShowBody)}>
        {header &&
          header.map((headerItem, index) => (
            <HeaderItem key={index}>{headerItem}</HeaderItem>
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
