import React from "react";
export default function Leaderboard(props){
    const mappedPlayers = props.players.map(player => {
        return(
          <div key={player.id}>
            <div>{player.name}</div>
            <div>{player.campus}</div>
            <div>{player.role}</div>
            <div>{player.wins}</div>
            <div>{player.losses}</div>
            <button onClick={() => props.updatePlayerRatio(player.id, true)}>Win</button>
            <button onClick={() => props.updatePlayerRatio(player.id, false)}>Loss</button>
          </div>
        );
      });
    return <div>{mappedPlayers}</div>
}