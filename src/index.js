// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Chat from './chat';
import './index.css';
import ROUTES from './routes';

window.user = {
  isConnect : false,
  id : null,
  username : null
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home /> } />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.CHAT} element={<Chat />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
