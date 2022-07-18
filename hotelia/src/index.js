import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PerfilHuesped from './pages/PerfilHuesped';
import FormHuesped from './pages/FormHuesped';
import LoginHuesped from './pages/LoginHuesped';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>

    <Routes>
        <Route path='/perfil-usuario' element={<PerfilHuesped/>} ></Route>
        <Route path='/login-usuario' element={<LoginHuesped/>} ></Route>
        <Route path='/formulario-usuario' element={<FormHuesped/>} ></Route>

        <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
    </Routes>

    </BrowserRouter>
);
