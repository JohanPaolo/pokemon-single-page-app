import { pokedex } from "../../data/pokedex"

export const getPokemonsbyType = (type1='',type2='') => {
    
    type1 = 'Fire';
    type2 = 'Poison';
    type1 = type1.trim();
    type2 = type2.trim();
    if(type1.length === 0 && type2.length === 0) return [];

    const results = pokedex.filter(
        pokemon => pokemon.typeofpokemon.includes(type1) &&
        pokemon.typeofpokemon.includes(type2)
        );

    return results;
}
