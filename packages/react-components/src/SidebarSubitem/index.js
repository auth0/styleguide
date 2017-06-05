import React, { PropTypes, cloneElement } from 'react';

const SidebarSubitem = ({ text, wrapper }) => {
  const WrapperSubitemChildren = () =>
    <span className="menu-subitem-link">
      <span className="text">{text}</span>
    </span>;

  return (
    <li className="a0r-sidebar-menu-subitem">
      {cloneElement(wrapper, { children: <WrapperSubitemChildren /> })}
    </li>
  );
};

SidebarSubitem.propTypes = {
  /**
   * Text of the item.
   */
  text: PropTypes.string.isRequired,
  /**
   * Wrapper element around the inner content of the item.
   */
  wrapper: PropTypes.node
};

SidebarSubitem.defaultProps = {
  wrapper: <span />
};

export default SidebarSubitem;
