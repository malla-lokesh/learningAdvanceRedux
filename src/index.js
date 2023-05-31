import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import centralStore from './store/CentralStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={centralStore}>
    <App />
</Provider>);