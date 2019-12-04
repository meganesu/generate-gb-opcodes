import React from 'react';
import PropTypes from 'prop-types';

const DetailsSidebar = ({ activeInstruction, hideSidebar }) => {
  const z = activeInstruction.flags.Z || '-';
  const n = activeInstruction.flags.N || '-';
  const h = activeInstruction.flags.H || '-';
  const cy = activeInstruction.flags.CY || '-';

  return (
    <aside id="details-sidebar">
      <div id="sidebar-header">
        <h3>
          {activeInstruction.mnemonic}
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
          <li>{`Opcode: 0x${activeInstruction.opCode}`}</li>
          <li>{`Number of Bytes: ${activeInstruction.bytes}`}</li>
          <li>{`Number of Cycles: ${activeInstruction.cycles}`}</li>
          <li>{`Flags: ${z} ${n} ${h} ${cy}`}</li>
        </ul>
      </section>
    </aside>
  );
};

export default DetailsSidebar;

DetailsSidebar.propTypes = {
  activeInstruction: PropTypes.shape({
    mnemonic: PropTypes.string,
    opCode: PropTypes.string,
  }).isRequired,
  hideSidebar: PropTypes.func.isRequired,
};
