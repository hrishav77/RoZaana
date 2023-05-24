import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoalcontextProvider } from './components/Context/GoalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
<GoalcontextProvider>
    <App />
    </GoalcontextProvider>
    </React.StrictMode>
    
);
