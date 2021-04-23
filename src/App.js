import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import RouterConfig from './router/routerConfig'
import RouterView from './router/routerView'

function App() {
    return (
        <Router>
            <RouterView routes={RouterConfig}/>
        </Router>
    );
}

export default App;