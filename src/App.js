import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CreateComixPage from './components/create_comix_page/createComixPage';

function App() {
  const [left, setLeft] = useState(500);
  const [top, setTop] = useState(100);
  const [contact, setContact] = useState('off')


  console.log('contact', contact)

  function moveAt(pageX, pageY) {
    setLeft(pageX - 40 / 2)
    setTop(pageY - 40 / 2)
  }

  function onMouseMove(event){
    if (contact === 'on'){
      moveAt(event.pageX, event.pageY);
    }
  };


  function onMouseDown(event){

    if (contact === 'on'){
      moveAt(event.pageX, event.pageY);
      setContact('off')
    }
    if (contact === 'off'){
      moveAt(event.pageX, event.pageY);
      setContact('on')
    }
  

  }






















  return (
    <div className="App">
      <header className="App-main">
        <div className="main-content">

          <CreateComixPage />

        </div>
  {/* <img 
  id='ball' 
  onMouseDown={onMouseDown}
  onMouseMove={onMouseMove}
  src={'https://js.cx/clipart/ball.svg'} 
  style={{color: "#FF8C00", cursor: "pointer", position: "absolute", z_index: "1000", left: `${left}px`, top: `${top}px`}}
  
  /> */}







      
      
      
      
      
      
      </header>
    </div>
  );
}

export default App;
