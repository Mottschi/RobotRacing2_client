import React from 'react';

type Props = {
    terrain: 'GRASS' | 'ROCK' | 'LAVA' | 'WATER';
    players: Players;
    position: Position;
};

enum terrainOptions {
    GRASS = 'bg-lime-600',
    ROCK = 'bg-zinc-300',
    LAVA = 'bg-red-700',
    WATER = 'bg-blue-500',
}

const playerColors = {
    P1: 'bg-red-500',
    P2: 'bg-blue-500',
    P3: 'bg-orange-300',
    P4: 'bg-fuchsia-400',
};

function Tile({ terrain, players, position }: Props) {
    let backgroundColor: string = terrainOptions[terrain];
    for (const playerId in players) {
        console.log(playerId);
        const player = players[playerId];
        const playerPosition = player.position;
        if (playerPosition.x === position.x && playerPosition.y === position.y)
            backgroundColor = playerColors[player.name];
    }
    return (
        <div
            className={`aspect-square w-10 border border-black ${backgroundColor} hover:bg-lime-800`}
            onClick={() => console.log(`clicked on position`, position)}
        ></div>
    );
}

export default Tile;
