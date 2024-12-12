import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { AboutMe } from './layout/section/aboutMe/AboutMe';
import { Portfolio } from './layout/section/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Skills />
    <AboutMe />
    <Portfolio />
    </div>
  );
}

export default App;
