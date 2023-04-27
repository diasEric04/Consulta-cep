//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//component imports
import App from './Pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
