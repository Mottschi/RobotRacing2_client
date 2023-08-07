import Tile from '../Tile/Tile';

function Gameboard() {
    return (
        <div>
            {/* {gameboard.map((row, rowIndex) => (
                <div className="flex">
                    {row.map((tile: Tile, tileIndex) => (
                        <Tile
                            terrain={tile}
                            players={players}
                            position={{ x: tileIndex, y: rowIndex }}
                        />
                    ))}
                </div>
            ))} */}
        </div>
    );
}

export default Gameboard;
