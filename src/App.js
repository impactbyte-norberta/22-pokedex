import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";
import Pokemons from "./pages/Pokemons/Pokemons";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";

import PrivateRoute from "./helpers/PrivateRoute";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>

                <PrivateRoute exact path="/pokemons">
                    <Pokemons />
                </PrivateRoute>

                <PrivateRoute exact path="/pokemons/:name">
                    <PokemonDetails />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
