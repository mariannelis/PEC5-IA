// 1. Imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// 2. Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);