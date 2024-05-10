import React from 'react';
import ROUTES from './routes';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue sur notre site !</h1>
      <p>Ceci est la page d'accueil de notre Single Page Application construite avec React.</p>
      <a href={ROUTES.CHAT}>Chat</a>
    </div>
  );
}

export default Home;
