import { Routes, Route } from 'react-router-dom';
import './App.css';
import ParamsContainer from './components/param_container/paramContainer';
import CreateComixPage from './components/create_comix_page/createComixPage';
import AppContainer from './components/app_container/appContainer';
import MainPage from './components/main_page/mainPage';

import { useParams } from 'react-router-dom';



function App() {

  function renderHomePage(component){
    return (
      <AppContainer>
        {component}
      </AppContainer>
    );
  }


  function renderWithParams(component){
    return (
      <AppContainer>
        <ParamsContainer>
          {component}
        </ParamsContainer>
      </AppContainer>
      
    );
  }





  return (
    <>   
    <Routes>
      <Route path="/" element={renderHomePage(<MainPage/>)}/>
      <Route path="/create_comix_page/:id" element={renderWithParams(<CreateComixPage/>)}/>
    </Routes>
    </>
  );
}

export default App;
