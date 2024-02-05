import React from 'react';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { getPokemonsbyName } from '../helpers/getPokemonsbyName';
import { pokedex } from '../../data/pokedex';
import { PokemonCard } from '../components/PokemonCard';

export const SearchIdPage = () => {

  // Pendiente la siguiente instalación:
  // yarn add query-string

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const pokemons = getPokemonsbyName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (pokemons.length === 0);

  const onSearchSubmit = (event)=>{
    event.preventDefault();
    navigate(`?q=${searchText}`);
  }

  const {searchText,onInputChange} = useForm({
    searchText: q
  });

  return (
    <>
      <h1 className='mt-2'>Search by Id</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input
             type='text'
             placeholder='Write pokemon ID'
             className='form-control'
             name='searchText'
             autoComplete='off'
             value={searchText}
             onChange={onInputChange} >
            </input>

            <button className='btn btn-outline-primary mt-2'>
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          <div className="alert alert-primary animate__animated animated__fadeIn"
            style={{display: showSearch? '': 'none' }}>
            Search a pokemon
          </div>

          <div className="alert alert-danger animate__animated animated__fadeIn"
            style={{display: showError? '': 'none' }}>
            Can't find {q}
          </div>

          {
            pokedex.map(pokemon=>{
              <PokemonCard key={pokemon.id} {...pokemon} />
            })
          }
        </div>
      </div>
    </>
  )
}
