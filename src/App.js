import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Router from './routes/Router';
import './App.css';

export default function App() {
  const [heroes, setHeroes] = useState([]);

  const getHeroes = useCallback(async () => {
    const response = await axios('http://hahow-recruit.herokuapp.com/heroes');
    const data = await response.data;
    setHeroes(data);
  }, []);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  return <Router heroes={heroes} />;
}
