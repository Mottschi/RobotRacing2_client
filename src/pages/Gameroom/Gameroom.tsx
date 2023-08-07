import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gameboard from '../../components/Game/Gameboard/Gameboard';
import Player from '../../components/Game/Player/Player';
import OtherPlayers from '../../components/Game/OtherPlayers/OtherPlayers';
import { useUser } from '../../components/Layout/Layout';
import { io, Socket } from 'socket.io-client';

type Props = {};

/**
 * The Gameroom page will be responsible for the interaction with the
 * backend via sockets. It will hold the games map and current gamestate
 * in its state
 *
 * @param param
 * @returns
 */
function Gameroom({}: Props) {
    const { gameId } = useParams();
    const { user } = useUser();
    const [gameboard, setGameboard] = useState<Gameboard>([]);
    const [socket, setSocket] = useState<Socket | null>(null);

    console.log('user:', user);

    useEffect(() => {
        const ioSocket = io(import.meta.env.VITE_BACKEND_URL, {
            query: {
                gameId,
                user,
            },
        });

        setSocket(ioSocket);

        return () => {
            // cleanup
            ioSocket.disconnect();
        };
    }, []);

    return (
        <div>
            <Player />
            <Gameboard />
            <OtherPlayers />
        </div>
    );
}

export default Gameroom;
