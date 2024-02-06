import { pokedex } from "../../data/pokedex";

export const getPokemonsById = (id) => {
    id = id.padStart(3, '0'); // Añade ceros a la izquierda si el ID tiene menos de 3 dígitos
    const idWithHash = `#${id}`;
    return pokedex.filter(pokemon => pokemon.id === idWithHash);
};
