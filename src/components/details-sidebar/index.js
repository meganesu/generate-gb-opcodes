const DetailsSidebar = ({activeInstruction, hideSidebar}) => (
  <div id="details-sidebar">
    {activeInstruction.mnemonic}
    <button
      id="close-sidebar"
      aria-label="close details sidebar"
      onClick={hideSidebar}
    >
      X
    </button>
  </div>
);

export default DetailsSidebar;