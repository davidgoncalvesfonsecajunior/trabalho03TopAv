import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Veiculos = () => {
  const [veiculos, SetVeiculos] = useState([]);

  useEffect(() => {
    async function getVeiculos() {
      const resposta = await axios.get(
        'http://localhost:3000/veiculos?_expand=proprietario',
      );
      SetVeiculos(resposta.data);
    }
    getVeiculos();
  }, []);

  async function removerVeiculo(id) {
    if (window.confirm('Tem certeza que deseja excluir o veiculo?')) {
      try {
        await axios.delete(`http://localhost:3000/veiculos/${id}`);

        SetVeiculos(veiculos.filter((veiculo) => veiculo.id !== id));
      } catch (error) {
        alert('Problema o remover o veiculo');
      }
    }
  }
  if (veiculos.length === 0) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <h1>Veiculos</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Proprietario</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Serviço</th>
            <th>Observação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => (
            <tr key={veiculos.id}>
              <td>{veiculo.proprietario.nome}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.ano}</td>
              <td>{veiculo.placa}</td>
              <td>{veiculo.servico}</td>
              <td>{veiculo.observacao}</td>

              <td>
                <Link
                  to={`CadVeiculos/${veiculo.id}`}
                  className="badge bg-primary"
                >
                  Editar
                </Link>{' '}
                <button
                  className="badge bg-danger"
                  onClick={() => removerVeiculo(veiculo.id)}
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

export default Veiculos;
