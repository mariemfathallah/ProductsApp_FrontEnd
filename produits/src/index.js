import React from 'react';


import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';

import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);
$(document).ready(function(){
  $(".openMenu, .cornerMenu").click(function(){
      $("body").toggleClass("menuOpened");
  });

  $(".menu_overlay").click(function(){
      $("body").removeClass("menuOpened");
  });
});

