import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search);

  const heroes = getHeroesByName(q);

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && ( heroes.length === 0);

  const { searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault(); // evita la propagación del formulario (refresh)

    if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${searchText.toLowerCase().trim() }`);
  }

  return (
    <>
      <div className="row mt-2">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input
                type="text"
                placeholder="Search a hero" 
                className="form-control"
                name="searchText"
                autoComplete="false"
                value={ searchText }
                onChange={ onInputChange }
              />
              <button
                className="btn btn-primary mt-1"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />
            {/* Una forma de hacerlo */}
            {/* {
              ( q === '')
              ? <div className="alert alert-primary"> Search a hero</div>
              : ( heroes.length === 0) && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            {/* otra forma de hacerlo */}
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none'}}>
              No hero with <b>{ q }</b>
            </div>

            {/* Fin de la otra manera */}
            {
              heroes.map( hero => (
                <HeroCard key={ heroes.id } { ...hero } />
            ))}


          </div>
      </div>
    </>
  )
}
