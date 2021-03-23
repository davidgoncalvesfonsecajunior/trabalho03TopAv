import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Proprietarios = () => {
  const [proprietarios, SetProprietarios] = useState([]);

  useEffect(() => {
    async function getProprietarios() {
      const resposta = await axios.get('http://localhost:3000/proprietarios');
      SetProprietarios(resposta.data);
    }
    getProprietarios();
  }, []);

  async function removerProprietario(id) {
    if (window.confirm('Tem certeza que deseja excluir o cliente?')) {
      try {
        await axios.delete(`http://localhost:3000/proprietarios/${id}`);

        SetProprietarios(
          proprietarios.filter((proprietario) => proprietario.id !== id),
        );
      } catch (error) {
        alert('Problema o remover o Cliente?');
      }
    }
  }
  if (proprietarios.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Proprietarios</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cpf</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {proprietarios.map((proprietario) => (
            <tr key={proprietario.id}>
              <td>{proprietario.nome}</td>
              <td>{proprietario.idade}</td>
              <td>{proprietario.cpf}</td>

              <td>
                <Link
                  to={`/CadProprietarios/${proprietario.id}`}
                  className="badge bg-primary"
                >
                  Editar
                </Link>{' '}
                <button
                  className="badge bg-danger"
                  onClick={() => removerProprietario(proprietario.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Proprietarios;
