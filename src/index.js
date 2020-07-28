import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './components/pages/cadastro/Video';
import CadastroCategoria from './components/pages/cadastro/Categoria';

ReactDOM.render(


  <BrowserRouter>
  
  <Switch>

    <Route exact path="/" component={Home} />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />

    <Route component={()=> (<div>Página 404</div>)} />

  </Switch>
  
  </BrowserRouter>,

  
  document.getElementById('root')
);


