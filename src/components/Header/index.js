import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink activeClassName="badge bg-primary" to="/" end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink activeClassName="badge bg-primary" to="veiculos">
        Veiculos
      </NavLink>{' '}
      |{' '}
      <NavLink activeClassName="badge bg-primary" to="proprietarios">
        Proprietarios
      </NavLink>{' '}
      |{' '}
      <NavLink activeClassName="badge bg-primary" to="CadProprietarios">
        Cadastro de Clientes
      </NavLink>
      |{' '}
      <NavLink activeClassName="badge bg-primary" to="CadVeiculos">
        Cadastro de Veículos
      </NavLink>{' '}
    </nav>
  );
};

export default Header;
