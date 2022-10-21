import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from 'pages';
import { Provider } from 'jotai'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Root />
    </Provider>
  </React.StrictMode>
);
