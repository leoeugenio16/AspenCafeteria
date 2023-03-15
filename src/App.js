import React from 'react';
import { Switch,Router, Route, BrowserRouter } from 'react-router-dom';
import Cafe from './carta/Cafe';
import Carta from './carta/Carta';
import NavBar from './navbar/NavBar.js';
import Promociones from './promociones/Promociones';
import Inicio from './inicio/Inicio.js'
import Nosotros from './nosotros/Nosotros';
import Bebidas from './carta/Bebidas';
import Dulce from './carta/Dulce';
import DesayunoMerienda from './carta/DesayunoMerienda';



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
        <Route path="/bebidas" component={Bebidas}/>
        <Route path="/dulce" component={Dulce} />
        <Route path="/desayunoMerienda" component={DesayunoMerienda}/>
      </Switch>
    </BrowserRouter>


  );
};

export default EnrutadorDeApp;