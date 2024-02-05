import { pokedex } from "../../data/pokedex"

export const getPokemonsbyName = (name='') => {
    
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];

    return pokedex.filter(pokemon => pokemon.name.toLocaleLowerCase().includes(name));
}
