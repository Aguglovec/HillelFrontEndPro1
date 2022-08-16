import { Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import EasyGamePage from '../../game/pages/EasyGamePage';
import RegularGamePage from '../../game/pages/RegularGamePage';
import HardGamePage from '../../game/pages/HardGamePage';
import HighscorePage from '../../highscore/pages/HighscorePage';
import MenuPage from '../../menu/pages/MenuPage';



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/menu" />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="easy" element={<EasyGamePage />} />
                <Route path="regular" element={<RegularGamePage />} />
                <Route path="hard" element={<HardGamePage />} />
                <Route path="highscore" element={<HighscorePage />} />
                {/* </Route> */}
            </Route>
        </Routes>
    );
}

export default AppRoutes;
