import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css'; // Explicitly import App.css here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);