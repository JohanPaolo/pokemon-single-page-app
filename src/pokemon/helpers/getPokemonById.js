import { pokedex } from "../../data/pokedex"

export const getPokemonById = (id) => {
    return pokedex.find(pokemon => pokemon.id === id);
}
