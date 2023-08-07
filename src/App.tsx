import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Gameroom from './pages/Gameroom/Gameroom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<>Hello!</>} />
                    <Route path="/game/:gameId" element={<Gameroom />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
