import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import routes from './router/router.config'
import RouterView from './router/router.view'


function App() {


    return (
        <Router>
            <RouterView routes={routes}/>
        </Router>
    );
}

export default App;