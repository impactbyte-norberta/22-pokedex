import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Pokemons() {
    const [pokemons, setPokemon] = useState({});

    async function fetchPokemon() {
        let url = 'https://pokeapi.co/api/v2/pokemon';

        let response = await fetch(url);
        let results = await response.json();

        await setPokemon(results);
    }

    useEffect(() => {
        fetchPokemon();

        // disable-next-line
    }, []);

    console.log(pokemons);
    return (
        <div>
            {pokemons.results !== undefined &&
                pokemons.results.map((pokemon, index) => (
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <div>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${
                                    index + 1
                                }.png`}
                                alt='pokeimage'
                            />
                            <h1>{pokemon.name}</h1>
                        </div>
                    </Link>
                ))}
        </div>
    );
}

export default Pokemons;
