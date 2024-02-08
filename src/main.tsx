import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App.tsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './Services/user.ts';
import './index.css';

const store = configureStore({
  reducer: { user: userSlice },
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
