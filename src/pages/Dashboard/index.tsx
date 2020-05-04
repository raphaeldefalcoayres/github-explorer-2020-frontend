import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepositoy] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);

      const newRepositories = response.data;

      setRepositories([...repositories, newRepositories]);
      setNewRepositoy('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          onChange={e => setNewRepositoy(e.target.value)}
          value={newRepository}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
