import { Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import EasyGamePage from '../../game/pages/EasyGamePage';
import RegularGamePage from '../../game/pages/RegularGamePage';
import HardGamePage from '../../game/pages/HardGamePage';
import HighscorePage from '../../highscore/pages/HighscorePage';
import MenuPage from '../../menu/pages/MenuPage';
import { DIFF_EASY, DIFF_REGULAR, DIFF_HARD } from '../../../config';
import Description from '../../description/Description';



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Navigate to="/menu" />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path={DIFF_EASY} element={<EasyGamePage />} />
                <Route path={DIFF_REGULAR} element={<RegularGamePage />} />
                <Route path={DIFF_HARD} element={<HardGamePage />} />
                <Route path="highscore" element={<HighscorePage />} />
                <Route path="about" element={<Description />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
