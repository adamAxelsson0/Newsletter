import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/header.css';
import './css/loginRegister.css';
import NewsletterSite from './components/NewsletterSite';


ReactDOM.render(
  <React.StrictMode>
    <NewsletterSite />
  </React.StrictMode>,
  document.getElementById('root')
);