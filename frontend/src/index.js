import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoalcontextProvider } from './components/Context/GoalContext';
import { AuthContextProvider } from './components/Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <AuthContextProvider>
    <GoalcontextProvider>
    <App />
    </GoalcontextProvider>
    </AuthContextProvider>
    </React.StrictMode>
    
);
