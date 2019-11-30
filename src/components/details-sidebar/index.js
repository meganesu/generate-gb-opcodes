const DetailsSidebar = ({activeInstruction}) => (
  <div id="details-sidebar">
    <button
      id="close-sidebar"
      aria-label="close details sidebar"
      onClick={() => {console.log('close sidebar button clicked!')}}
    >
      X
    </button>
    {activeInstruction}
  </div>
);

export default DetailsSidebar;