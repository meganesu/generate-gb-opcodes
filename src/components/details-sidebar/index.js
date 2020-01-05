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
  },
  hideSidebar,
  isHidden,
}) => (
  <aside
    id="details-sidebar"
    className={[
      styles.sidebar,
      isHidden ? styles.hidden : null,
    ].join(' ')}
  >
    <div id="sidebar-header" className={styles.header}>
      <h3 className={styles.title}>
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
    <section aria-label="description">Description: Coming Soon</section>
    <section>
      <ul>
        <li>{`Opcode: 0x${opCode}`}</li>
        <li>{`Number of Bytes: ${bytes}`}</li>
        <li>{`Number of Cycles: ${cycles}`}</li>
        <li>{`Flags: ${Z || '-'} ${N || '-'} ${H || '-'} ${CY || '-'}`}</li>
      </ul>
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
  }).isRequired,
  hideSidebar: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
