import axios from 'axios';
import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';

const FormularioCadVeiculo = () => {
  const [proprietarios, setProprietarios] = React.useState([]);

  const navigate = useNavigate();

  const [proprietarioId, setProprietarioId] = React.useState('');
  const [modelo, setModelo] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [placa, setPlaca] = React.useState('');
  const [servico, setServico] = React.useState('');
  const [observacao, setObservacao] = React.useState('');

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      async function getVeiculos() {
        const resposta = await axios.get(
          `http://localhost:3000/veiculos/${params.id}`,
        );
        setProprietarioId(resposta.data.proprietarioId);
        setModelo(resposta.data.modelo);
        setAno(resposta.data.ano);
        setPlaca(resposta.data.placa);
        setServico(resposta.data.servico);
        setObservacao(resposta.data.observacao);
      }
      getVeiculos();
    }
  }, [params.id]);

  React.useEffect(() => {
    async function getProprietarios() {
      const resposta = await axios.get('http://localhost:3000/proprietarios');
      setProprietarios(resposta.data);
    }
    getProprietarios();
  }, []);

  async function submeterFormulario(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/veiculos', {
          proprietarioId: Number(proprietarioId),
          modelo,
          ano: Number(ano),
          placa,
          servico,
          observacao,
        });
        navigate('/');
      } else {
        await axios.put(`http://localhost:3000/veiculos/${params.id}`, {
          proprietarioId: Number(proprietarioId),
          modelo,
          ano: Number(ano),
          placa,
          servico,
          observacao,
        });
        navigate('/');
      }

      setProprietarioId(1);
      setModelo('');
      setAno('');
      setPlaca('');
      setServico('');
      setObservacao('');
    } catch (error) {
      alert('Erro ao salvar dados');
    }
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div className="form-group">
        <h1>Formulário de Cadastro de Veículos</h1>

        <div className="form-group">
          <label htmlFor="proprietarioId">Proprietario</label>
          <select
            name="proprietarioId"
            id="proprietarioId"
            className="form-control"
            value={proprietarioId}
            onChange={(e) => setProprietarioId(e.target.value)}
          >
            {proprietarios.map((proprietario) => (
              <option key={proprietario.id} value={proprietario.id}>
                {proprietario.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            name="modelo"
            id="modelo"
            className="form-control"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ano">Ano</label>
          <input
            type="number"
            name="ano"
            id="ano"
            className="form-control"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="placa">Placa</label>
          <input
            type="text"
            name="placa"
            id="placa"
            className="form-control"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="servico">Serviço</label>
          <input
            type="text"
            name="servico"
            id="servico"
            className="form-control"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="observacao">Observação</label>
          <input
            type="text"
            name="observacao"
            id="observacao"
            className="form-control"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />
        </div>
        <br />

        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default FormularioCadVeiculo;
