import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles.css";

// 🆕 import the ThemeProvider
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 🆕 wrap App inside ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
