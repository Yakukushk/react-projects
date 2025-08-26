import ResultModal from "./ResultModal";

export default function ScoreBoard() {

    const players = JSON.parse(localStorage.getItem('players')) || [];
    console.log(players);
    return(
        <>
        <section style={{border: '2px solid #fffff'}}>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name} - {player.score}</li>
                ))}
            </ul>
        </section>
        </>
    );
}