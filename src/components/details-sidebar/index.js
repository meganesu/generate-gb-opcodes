const DetailsSidebar = ({activeInstruction}) => (
  <div id="details-sidebar">
    <button
      id="close-sidebar"
      aria-label="close details sidebar"
      onClick={() => {console.log('close sidebar button clicked!')}}
    >
      X
    </button>
    {activeInstruction && activeInstruction.mnemonic}
  </div>
);

export default DetailsSidebar;