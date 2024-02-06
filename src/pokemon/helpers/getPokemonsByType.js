import { pokedex } from "../../data/pokedex"

export const getPokemonsbyType = (type1='',type2='') => {
    
    type1 = type1.trim().toLowerCase();
    type2 = type2.trim().toLowerCase();
    type1 = type1.charAt(0).toUpperCase() + type1.slice(1);
    type2 = type2.charAt(0).toUpperCase() + type2.slice(1);
    if(type1.length === 0 && type2.length === 0) return [];

    let results;

    if(type2===''){
        results = pokedex.filter(
            pokemon => pokemon.typeofpokemon.includes(type1) &&
            pokemon.typeofpokemon.length === 1
            );
    }
    else{
        results = pokedex.filter(
            pokemon => pokemon.typeofpokemon.includes(type1) &&
            pokemon.typeofpokemon.includes(type2)
            );
    }

    return results
}
