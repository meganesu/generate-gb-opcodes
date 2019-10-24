const InstructionCell = props => {
  const { instruction } = props;
  return (
    <td
      className={`instruction ${instruction.type}`}
    >
      <span className='mnemonic'>{instruction.mnemonic}</span>
    </td>
  );
};

export default InstructionCell;