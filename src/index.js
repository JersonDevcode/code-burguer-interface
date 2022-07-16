import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import MyRoutes from './routes/routes';
import { UserProvider } from './hooks/UserContext';
import Globalstyles from './styles/globalstyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <UserProvider>
        <MyRoutes />
      </UserProvider>
      
      <ToastContainer autoClose={2000} theme='colored' />
      <Globalstyles />
    </>
  </React.StrictMode>
);