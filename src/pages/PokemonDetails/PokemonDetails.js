import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    function fetchSinglePokemon() {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

        fetch(url)
            .then((response) => response.json())
            .then((result) => setPokemon(result));
    }

    useEffect(() => {
        fetchSinglePokemon();

        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {pokemon.sprites !== undefined && (
                <img src={pokemon.sprites.front_shiny} alt="pokemon" />
            )}
        </div>
    );
}

export default PokemonDetails;
