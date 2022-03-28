import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  render() {
    return (

      <>

        <Header />
        <SolarSystem />
        <Missions />
        <Title />
        <footer>Jéssica Pereira - Project Solar System - 2022</footer>
      </>

    );
  }
}

export default App;
