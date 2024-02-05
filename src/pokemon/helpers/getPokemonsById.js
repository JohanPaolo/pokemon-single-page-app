import { pokedex } from "../../data/pokedex"

export const getPokemonsById = (id) => {
    return pokedex.filter(pokemon => pokemon.id === id);
}
