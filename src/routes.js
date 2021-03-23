import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormularioProprietarios from './pages/FormularioProprietarios';
import FormularioVeiculos from './pages/FormularioVeiculos';
import Home from './pages/page-Home';
import Proprietarios from './pages/Proprietarios';
import Veiculos from './pages/Veiculos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="veiculos" element={<Veiculos />} />
      <Route path="proprietarios" element={<Proprietarios />} />
      <Route path="CadVeiculos" element={<FormularioVeiculos />} />
      <Route path="CadProprietarios" element={<FormularioProprietarios />} />
      <Route path="CadVeiculos/:id" element={<FormularioVeiculos />} />
      <Route
        path="CadProprietarios/:id"
        element={<FormularioProprietarios />}
      />
    </Routes>
  );
};

export default AppRoutes;
