import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPokemonsbyName } from '../helpers/getPokemonsbyName';
import { PokemonCard } from '../components/PokemonCard';

export const SearchNamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const pokemons = getPokemonsbyName(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (pokemons.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });


  const onSearchSubmit = async (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className='mt-2'>Search by name</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder="Write pokemon's name "
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
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
            Can't find {searchText}
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
