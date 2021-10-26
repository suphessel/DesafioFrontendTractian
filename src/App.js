// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from './pages/LandingPage';
import styled from "styled-components";

const AppContainer = styled.div`

 display: flex;
  flex-direction: column;
background-color: green;
/* height: 1px; */

`
const App = () => {

  return (
    <AppContainer>
     
       <Header />
      <LandingPage/>
      <Footer/>
    
    </AppContainer>
  );
}

export default App;
