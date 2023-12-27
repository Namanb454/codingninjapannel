import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/auth";
import { EventDataProvider } from './context/event';
import Form from './components/Layout/Form';
// import Form from './components/Layout/Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <EventDataProvider>
        <App />
        {/* <Form /> */}
      </EventDataProvider>
    </BrowserRouter>
  </AuthProvider>
);

reportWebVitals();
