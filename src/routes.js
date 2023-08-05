import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Back from './pages/back';
import Front from './pages/front';
import Erro from './pages/erro';
import Mobile from './pages/mobile';
import Banco from './pages/banco';
import Design from './pages/design';

import TypeScript from './pages/front/typescript';
import Html from './pages/front/html';
import JavaScript from './pages/front/javascript';
import Angular from './pages/front/angular';
import React from './pages/front/react';
import Bootstrap from './pages/front/bootstrap';

import Header from "./components/header/header";

export default function RoutesAPP(){
    return(
        <BrowserRouter>
        <Routes>
            {/* Rotas principais */}
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Erro/>}/>
            <Route path="/back" element={<Back/>}/>
            <Route path="/front" element={<Front/>}/>   
            <Route path="/mobile" element={<Mobile/>}/>   
            <Route path="/banco" element={<Banco/>}/>   
            <Route path="/design" element={<Design/>}/>   

            {/* Rotas Front */}
            <Route path="/typeScript" element={<TypeScript/>}/>
            <Route path="/html" element={<Html/>}/>
            <Route path="/javaScript" element={<JavaScript/>}/>
            <Route path="/angular" element={<Angular/>}/>   
            <Route path="/react" element={<React/>}/>   
            <Route path="/bootstrap" element={<Bootstrap/>}/>
        </Routes>
        </BrowserRouter>
    );
}