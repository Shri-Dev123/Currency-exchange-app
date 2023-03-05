import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react'
import Layout from './components/Layout';

import PageNotFound404 from './components/PageNotFound404';
import App_exchange from './components/App_Exchange';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='*' element={<PageNotFound404/>}/>
                    <Route index element={<App_exchange/>} />
                </Route>
            </Routes>
        </Router>
    )
}