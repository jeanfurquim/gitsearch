import axios from 'axios';
import ResultCard from 'components/ResultCard';
import React from 'react';
import { useState } from 'react';
import './styles.css';

type FormData = {
  name: string;
};

type User = {
  url: string;
  followers: string;
  name: string;
  location: string;
  avatar_url: string;
};

const GitSearch = () => {
  const [user, setUser] = useState<User>();

  const [formData, setFormData] = useState<FormData>({
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.name}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error)=>{
        setUser(undefined);
        
      })
  };
  
  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="name"
              value={formData.name}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>

        {user && (
          <>
            <div className="container card-github">
              <div className="card-img">
                <img src={user.avatar_url} alt={user.name} />
              </div>
              <div className="card-info">
                <h6 className="text-primary">Informações</h6>
                <ResultCard title="Perfil: " description={user?.url} />
                <ResultCard
                  title="Seguidores: "
                  description={user?.followers}
                />
                <ResultCard title="Localidade: " description={user?.location} />
                <ResultCard title="Nome: " description={user?.name} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GitSearch;
