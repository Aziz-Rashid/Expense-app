import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Totalbalance from './components/TotalBalance/Totalbalance'
import { GlobalProvider } from './services/Globalstate'
import Income from './components/Income/Income'
import History from './components/History/History'

const App = () =>{
  return (
    <div className="back">
      <GlobalProvider>
        <Header />
        <Totalbalance />
        <Income />
        <History />
      </GlobalProvider>
    </div>
  );
}

export default App;
