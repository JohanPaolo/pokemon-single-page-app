import React from 'react';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';
import { getPokemonsbyType } from '../helpers';

export const SearchTypePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q1 = '', q2 = '' } = queryString.parse(location.search);

  const pokemons = getPokemonsbyType(q1, q2);
  const showSearch = (q1.length === 0 && q2.length === 0);
  const showError = (q1.length > 0 || q2.length > 0) && (pokemons.length === 0);

  const { searchText1, searchText2, onInputChange } = useForm({
    searchText1: q1,
    searchText2: q2,
  });

  const onSearchSubmit = async (event) => {
    event.preventDefault();

    navigate(`?q1=${searchText1}&q2=${searchText2}`);
  };

  return (
    <>
      <h1 className='mt-2'>Search by type</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder="Write pokemon's primary type"
              className='form-control'
              name='searchText1'
              autoComplete='off'
              value={searchText1}
              onChange={onInputChange}
            />

            <input
              type='text'
              placeholder="Write pokemon's secondary type"
              className='form-control mt-2'
              name='searchText2'
              autoComplete='off'
              value={searchText2}
              onChange={onInputChange}
            />

            <button type='submit' className='btn btn-outline-primary mt-2'>
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a pokemon
          </div>

          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{ display: showError ? '' : 'none' }}
          >
            Can't find any pokémon with the provided types
          </div>

          {/* Utiliza el operador ternario para verificar si hay resultados antes de mapear */}
          {pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} {...pokemon} />
            ))
          ) : null}
        </div>
      </div>
    </>
  );
};
