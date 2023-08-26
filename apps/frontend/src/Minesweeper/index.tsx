import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './Game';
import { Onboarding } from './Onboarding';
import { Provider } from 'react-redux';
import { store } from '../Utils/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const renderGrid = () => {
  root.render(
    <React.StrictMode>
      <Game />
    </React.StrictMode>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Onboarding renderGrid={renderGrid} />
    </Provider>
  </React.StrictMode>
);
