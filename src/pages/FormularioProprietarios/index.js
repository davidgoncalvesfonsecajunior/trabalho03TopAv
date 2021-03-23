import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const FormularioCadProprietario = () => {
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [cpf, setCpf] = React.useState('');

  const navigate = useNavigate();

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      async function getClientes() {
        const resposta = await axios.get(
          `http://localhost:3000/Proprietarios/${params.id}`,
        );
        setNome(resposta.data.nome);
        setIdade(resposta.data.idade);
        setCpf(resposta.data.cpf);
      }
      getClientes();
    }
  }, [params.id]);

  async function submeterFormulario(e) {
    e.preventDefault();
    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/proprietarios', {
          nome,
          idade: Number(idade),
          cpf: Number(cpf),
        });
        navigate('/proprietarios');
      } else {
        await axios.put(`http://localhost:3000/proprietarios/${params.id}`, {
          nome,
          idade: Number(idade),
          cpf: Number(cpf),
        });
        navigate('/proprietarios');
      }

      setNome('');
      setIdade('');
      setCpf('');
    } catch (error) {
      alert('Erro ao salvar dados');
    }
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div className="form-group">
        <h1>Formulário de Cadastro de Clientes</h1>

        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="idade">Idade</label>
          <input
            type="number"
            name="idade"
            id="idade"
            className="form-control"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            type="number"
            name="cpf"
            id="cpf"
            className="form-control"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
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

export default FormularioCadProprietario;
