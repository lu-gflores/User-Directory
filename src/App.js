import React from 'react';
import './App.css';
import TableBody from './components/TableBody'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
function App() {
  return (
    <div className="App container">
    <Wrapper>

    <Header/>

      <TableBody/>
     
    </Wrapper>
    </div>
  );
}

export default App;
