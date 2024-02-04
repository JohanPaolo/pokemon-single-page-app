

export const getRandomPokemons = (pokedex,cantPokemon) => {
    const copyPokedex = [...pokedex];
    const randomComparison = () => Math.random() - 0.5;

    copyPokedex.sort(randomComparison);
    return copyPokedex.slice(0, cantPokemon);
}
