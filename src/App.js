import React from 'react';
import { Switch,Router, Route, BrowserRouter } from 'react-router-dom';
import Carrusel from './carrusel/Carrusel';
import Cafe from './carta/Cafe';
import Carta from './carta/Carta';
import Inicio from './inicio/Inicio.js';



const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
      <Inicio/>
      <Switch>
        <Route path="/" component={Carrusel} exact={true}/>
        <Route path="/carta" component={Carta} />
        <Route path="/cafeteria" component={Cafe}/>
      </Switch>
    </BrowserRouter>


  );
};

export default EnrutadorDeApp;