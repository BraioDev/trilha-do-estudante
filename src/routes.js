import { Routes, Route } from "react-router-dom";
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
/* Banco */
import Heid from './pages/banco/heid';
import Oracle from './pages/banco/oracle';
import Pgadmin from './pages/banco/pgadmin';
import Mysql from './pages/banco/mysql';
import Sqlite from './pages/banco/sqlite';
import Mongodb from './pages/banco/mongodb';
/* Design */
import Figma from './pages/design/figma';
import Canva from './pages/design/canva';
import Illustrator from './pages/design/illustrator';
import Invision from './pages/design/invision';
import Sketch from './pages/design/sketch';
import Adobephotoshop from './pages/design/adobephotohop';
/* Login */
import Login from './pages/login'
import AutoCadastro from "./pages/autoCadastro";
/* Histórico */
import Historico from './pages/historico';
import Private from './private'

export default function RoutesAPP(){
    return(
        <Routes>
            {/* tela login */}
            <Route path="/login" element={<Login/>}/> 
            <Route path="/auto-cadastro" element={<AutoCadastro/>}/>

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

            {/* Rotas Banco */}
            <Route path="/heid" element={<Heid/>}/>
            <Route path="/oracle" element={<Oracle/>}/>
            <Route path="/pgadmin" element={<Pgadmin/>}/>
            <Route path="/mysql" element={<Mysql/>}/>   
            <Route path="/sqlite" element={<Sqlite/>}/>   
            <Route path="/mongodb" element={<Mongodb/>}/>
            
            {/* Rotas Design */}
            <Route path="/figma" element={<Figma/>}/>
            <Route path="/canva" element={<Canva/>}/>
            <Route path="/illustrator" element={<Illustrator/>}/>
            <Route path="/invision" element={<Invision/>}/>   
            <Route path="/sketch" element={<Sketch/>}/>   
            <Route path="/adobephotoshop" element={<Adobephotoshop/>}/>

            {/* Private */}
            <Route path="/historico" element={<Private><Historico/></Private>}/>
        </Routes>
    );
}