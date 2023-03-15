import React from 'react';
import { Switch,Router, Route, BrowserRouter } from 'react-router-dom';
import Cafe from './carta/Cafe';
import Carta from './carta/Carta';
import NavBar from './navbar/NavBar.js';
import Promociones from './promociones/Promociones';
import Inicio from './inicio/Inicio.js'
import Nosotros from './nosotros/Nosotros';



const EnrutadorDeApp = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" component={Inicio} exact={true}/>
        <Route path="/carta" component={Carta} />
        <Route path="/cafeteria" component={Cafe}/>
        <Route path="/promociones" component={Promociones}/>
        <Route path="/nosotros" component={Nosotros}/>
      </Switch>
    </BrowserRouter>


  );
};

export default EnrutadorDeApp;