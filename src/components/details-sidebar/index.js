const DetailsSidebar = ({activeInstruction, hideSidebar}) => (
  <div id="details-sidebar">
    <div id="sidebar-header">
      <h3>
        {activeInstruction.mnemonic}
      </h3>
      <button
        id="close-sidebar"
        aria-label="close details sidebar"
        onClick={hideSidebar}
      >
        X
      </button>
    </div>
    <section>
      <ul>
        <li>Opcode: 0x{activeInstruction.opCode}</li>
        <li>Description: Coming Soon</li>
      </ul>
    </section>
  </div>
);

export default DetailsSidebar;