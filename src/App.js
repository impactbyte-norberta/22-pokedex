import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Pokemons from './pages/Pokemons/Pokemons';

import PrivateRoute from './helpers/PrivateRoute';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>

                <PrivateRoute>
                    <Pokemons />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
