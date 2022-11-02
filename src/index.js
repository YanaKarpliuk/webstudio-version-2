import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'Components/App';
import './sass/main.scss';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </React.StrictMode>
);
