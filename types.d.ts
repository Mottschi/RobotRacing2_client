type Gameboard = Array<Array<Tile>>;

type Tile = 'GRASS' | 'LAVA' | 'ROCK' | 'WATER';

type Position = {
    x: number;
    y: number;
};

type Player = {
    id: string;
    position: Position;
    name: 'P1' | 'P2' | 'P3' | 'P4';
};

type Players = { [key: string]: Player };

type User = {
    username: string;
    id: string;
};
