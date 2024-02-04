import React from 'react';
import { getRandomPokemons } from '../helpers';

import { PokemonCard } from './PokemonCard';
import { pokedex } from '../../data/pokedex';

export const PokemonList = () => {

    const randomPokemon = getRandomPokemons(pokedex,21);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {randomPokemon.map(pokemon => (
                <PokemonCard 
                    key={pokemon.id}
                    {...pokemon}
                    
                />
            ))}
        </div>
    );
};
