import React, { useEffect, useState } from 'react';
import {
    Outlet,
    NavLink,
    useNavigate,
    useOutletContext,
} from 'react-router-dom';

import { generateUsername } from '../../utils/helpers';

type OutletContextType = {
    user: User | null;
};

function Layout() {
    const [user, setUser] = useState<User | null>(null);
    const [isGameActive, setIsGameActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const newUser: User = {
            username: generateUsername(),
            id: crypto.randomUUID(),
        };
        setUser(newUser);
        console.log('created new user', newUser);
    }, []);

    function handleStartGame() {
        // contact backend with instruction to start a new game
        // receive response with id of the new game
        // redirect to /game/:gameId
        navigate(`/game/${Math.floor(Math.random() * 1000)}`);
        setIsGameActive(true);
    }

    return (
        <>
            <nav>
                <p className="text-slate-100">
                    Current User:{' '}
                    {user != null ? user.username : 'User not found'}
                </p>
                <button
                    className="rounded-lg border bg-emerald-600 px-4 py-2 text-slate-100"
                    onClick={handleStartGame}
                >
                    Start New Game
                </button>
            </nav>
            <main>
                <Outlet context={{ user }} />
            </main>
        </>
    );
}

export function useUser() {
    return useOutletContext<OutletContextType>();
}

export default Layout;
