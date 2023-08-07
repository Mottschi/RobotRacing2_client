import {
    createContext,
    useContext,
    useState,
    useEffect,
    useReducer,
} from 'react';

import { useSoundManager } from '../../hooks/useSoundManager';

type Props = { children: JSX.Element };

type GameManagerContextType = {
    // Add signatures for values that need to be accessed by Gameroom components here
};

const GameManagerContext = createContext<GameManagerContextType | null>(null);

export function useGameManager() {
    const currentGameManagerContext = useContext(GameManagerContext);

    if (!currentGameManagerContext) {
        throw new Error('GameManagerContext is null');
    }

    return currentGameManagerContext;
}

function GameManager({ children }: Props) {
    const soundManager = useSoundManager();

    return (
        <GameManagerContext.Provider
            value={
                {
                    // Add values that need to be accessed by Gameroom components here
                }
            }
        >
            {children}
        </GameManagerContext.Provider>
    );
}

export default GameManager;
