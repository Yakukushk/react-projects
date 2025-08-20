export default function Log({ turns }) {
  return (
    <>
      <ol id="log">
        {turns.map(({ square, player }) => (
          <li key={`${square.row},${square.cell}`}>
            {player} selected {square.row}, {square.cell}
          </li>
        ))}
      </ol>
    </>
  );
}
