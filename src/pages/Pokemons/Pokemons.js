import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Card = styled.div`
    width: 150px;
    word-break: break;
    & img {
        width: 100%;
    }
`;

function Pokemons() {
    const [pokemons, setPokemon] = useState({});

    async function fetchPokemon() {
        let url = "https://pokeapi.co/api/v2/pokemon";

        let response = await fetch(url);
        let results = await response.json();

        await setPokemon(results);
    }

    useEffect(() => {
        fetchPokemon();

        // disable-next-line
    }, []);

    return (
        <div>
            <CardList>
                {pokemons.results !== undefined &&
                    pokemons.results.map((pokemon, index) => {
                        const id = pokemon.url.split("/")[6];

                        return (
                            <Card key={id}>
                                <Link to={`/pokemon/${id}`}>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                                        alt="pokeimage"
                                    />
                                </Link>
                                <h4>{pokemon.name}</h4>
                            </Card>
                        );
                    })}
            </CardList>
        </div>
    );
}

export default Pokemons;
