import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ children }) => createPortal(children, document.body);

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]).isRequired,
};
export default Portal;
