import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './layouts/app/App';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);