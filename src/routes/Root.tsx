import React from 'react';

import {Routes, Route} from 'react-router-dom';

import {Host} from '../pages/Host/Index';
import {Listener} from '../pages/Listener/Index';

export function Root(){
    return(
        <Routes>
            <Route
                path={"/"}
                element={
                    <Host/>
                }
            />
            <Route
                path={"/Listener"}
                element={
                    <Listener/>
                }
            />
        </Routes>
    )
}