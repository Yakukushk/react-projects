import { useState } from "react";

export default function PlayerEdit({ name, symbol, ...props }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {isEditing ? (
            <input
              onChange={(e) => setPlayerName(e.target.value)}
              type="text"
              required
            />
          ) : (
            playerName
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((wasEditing) => !wasEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
