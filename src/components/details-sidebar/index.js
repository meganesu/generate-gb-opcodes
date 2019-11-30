const DetailsSidebar = ({activeInstruction, hideSidebar}) => (
  <div id="details-sidebar">
    <button
      id="close-sidebar"
      aria-label="close details sidebar"
      onClick={hideSidebar}
    >
      X
    </button>
    {activeInstruction && activeInstruction.mnemonic}
  </div>
);

export default DetailsSidebar;