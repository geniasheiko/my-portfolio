import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { AboutMe } from './layout/section/aboutMe/AboutMe';
import { Footer } from './layout/footer/Footer';
import { MyWork } from './layout/section/portfolio/MyWork/MyWork';

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Skills />
    <AboutMe />
    <MyWork />
    <Footer />
    </div>
  );
}

export default App;
