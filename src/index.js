import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter ,Link,Switch,Route} from 'react-router-dom';
import Questions from './components/Questions';
import Submit from './components/Submit';

ReactDOM.render(
  <BrowserRouter>
    <App />

   

  </BrowserRouter>,
  document.getElementById('root')
);
