import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react';
import AlbumDetails from './modules/albums/components/AlbumDetails';
import AlbumsList from './modules/albums/components/AlbumsList';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                        <Route path="albums" element={<AlbumsList />} />
                        <Route path="albums/:id" element={<AlbumDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
