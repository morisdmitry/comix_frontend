import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CreateComixPage from './components/create_comix_page/createComixPage';


function App() {
  return (
    <div className="App">
      <header className="App-main">
        <div className="main-content">

          <CreateComixPage/>

        </div>
     
      </header>
    </div>
  );
}

export default App;
