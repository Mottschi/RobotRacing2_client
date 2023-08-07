import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import SoundManager from './context/SoundManager/SoundManager.tsx';
import GameManager from './context/GameManager/GameManager.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SoundManager>
            <GameManager>
                <App />
            </GameManager>
        </SoundManager>
    </React.StrictMode>,
);
