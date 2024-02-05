import { pokedex } from "../../data/pokedex"

export const getEvolutionsByPokemon = ({evolutions}) => {
  const searchingPokemons = pokedex.filter(pokemon => evolutions.includes(pokemon.id));
  const evolutionNames = searchingPokemons.map(pokemon => pokemon.name);
  return evolutionNames;
}
