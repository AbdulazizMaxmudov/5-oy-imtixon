import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LangProvider } from './context/LangContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <AuthProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </AuthProvider>
    </Router>

);


