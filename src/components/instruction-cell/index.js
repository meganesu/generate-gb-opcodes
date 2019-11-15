const InstructionCell = props => {
  const { instruction } = props;

  const z = instruction.flags.Z || '-';
  const n = instruction.flags.N || '-';
  const h = instruction.flags.H || '-';
  const cy = instruction.flags.CY || '-';

  return (
    <td
      className={`instruction ${instruction.type}`}
    >
      <div>
        <span className='mnemonic'>{instruction.mnemonic}</span>
        <span className='cycles'>{instruction.cycles}</span>
        <span className="flags">{`${z} ${n} ${h} ${cy}`}</span>
      </div>
    </td>
  );
};

export default InstructionCell;