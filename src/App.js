import React from 'react';
import './App.css';
import Table from './components/Table'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
function App() {
  return (
    <div className="App">
    <Wrapper>

    <Header/>

      <Table/>
      
    </Wrapper>
    </div>
  );
}

export default App;
