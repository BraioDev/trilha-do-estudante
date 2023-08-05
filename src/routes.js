import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Page principal */
import Home from './pages/home';
import Back from './pages/back';
import Front from './pages/front';
import Erro from './pages/erro';
import Mobile from './pages/mobile';
import Banco from './pages/banco';
import Design from './pages/design';
/* front */
import TypeScript from './pages/front/typescript';
import Html from './pages/front/html';
import JavaScript from './pages/front/javascript';
import Angular from './pages/front/angular';
import React from './pages/front/react';
import Bootstrap from './pages/front/bootstrap';
/* Back */
import Postman from './pages/back/postman';
import Spring from './pages/back/spring';
import Swagger from './pages/back/swagger';
import Java from './pages/back/java';
import Python from './pages/back/python';
import CSharp from './pages/back/csharp';
/* Mobile */
import Android from './pages/mobile/android';
import Flutter from './pages/mobile/flutter';
import Ionic from './pages/mobile/ionic';
import ReactNative from './pages/mobile/reactNative';
import Xamarin from './pages/mobile/xamarin';
import Xcode from './pages/mobile/xcode';

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

            {/* Rotas Back */}
            <Route path="/postman" element={<Postman/>}/>
            <Route path="/spring" element={<Spring/>}/>
            <Route path="/swagger" element={<Swagger/>}/>
            <Route path="/java" element={<Java/>}/>   
            <Route path="/python" element={<Python/>}/>   
            <Route path="/csharp" element={<CSharp/>}/>

            {/* Rotas Mobile */}
            <Route path="/android" element={<Android/>}/>
            <Route path="/flutter" element={<Flutter/>}/>
            <Route path="/Ionic" element={<Ionic/>}/>
            <Route path="/reactNative" element={<ReactNative/>}/>   
            <Route path="/xamarin" element={<Xamarin/>}/>   
            <Route path="/xcode" element={<Xcode/>}/>
        </Routes>
        </BrowserRouter>
    );
}