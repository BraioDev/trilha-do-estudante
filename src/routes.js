import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Back from './pages/back';
import Front from './pages/front';
import Erro from './pages/erro';
import Header from "./components/header/header";

export default function RoutesAPP(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Erro/>}/>
            <Route path="/back" element={<Back/>}/>
            <Route path="/front" element={<Front/>}/>   
        </Routes>
        </BrowserRouter>
    );
}