import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const DetailsSidebar = ({
  activeInstruction: {
    mnemonic,
    opCode,
    bytes,
    cycles,
    flags: {
      Z,
      N,
      H,
      CY,
    },
    description,
  },
  hideSidebar,
  isHidden,
  sidebarRef,
}) => (
  <aside
    aria-label="Opcode details"
    className={[
      styles.sidebar,
      isHidden ? styles.hidden : null,
    ].join(' ')}
    id="details-sidebar"
  >
    <div id="sidebar-header" className={styles.header}>
      <h3
        className={styles.title}
        ref={sidebarRef}
        tabIndex={-1}
      >
        {mnemonic}
      </h3>
      <button
        id="close-sidebar"
        type="button"
        aria-label="close details sidebar"
        onClick={hideSidebar}
      >
        X
      </button>
    </div>
    <section>
      <ul>
        <li>{`Opcode: 0x${opCode}`}</li>
        <li>{`Number of Bytes: ${bytes}`}</li>
        <li>{`Number of Cycles: ${cycles}`}</li>
        <li>{`Flags: ${Z || '-'} ${N || '-'} ${H || '-'} ${CY || '-'}`}</li>
      </ul>
    </section>
    <section aria-label="description">
      <h4>Description</h4>
      {description || <p>Coming Soon</p>}
    </section>
  </aside>
);

export default DetailsSidebar;

DetailsSidebar.propTypes = {
  activeInstruction: PropTypes.shape({
    mnemonic: PropTypes.string,
    type: PropTypes.string,
    bytes: PropTypes.number,
    cycles: PropTypes.string,
    flags: PropTypes.shape({
      Z: PropTypes.string,
      N: PropTypes.string,
      H: PropTypes.string,
      CY: PropTypes.string,
    }),
    opCode: PropTypes.string,
    description: PropTypes.element,
  }).isRequired,
  hideSidebar: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  sidebarRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }),
  ]).isRequired,
};
