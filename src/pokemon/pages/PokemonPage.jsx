import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPokemonById } from "../helpers/getPokemonById";
import { getEvolutionsByPokemon } from "../helpers";


export const PokemonPage = () => {

    const {id} = useParams();
    const pokemon = useMemo(()=> getPokemonById('#'+id),[id]);
    const evolutionLine = getEvolutionsByPokemon(pokemon);
    const navigate = useNavigate();

    const onNavigateBack = ()=>{
        navigate(-1);
    }
    
    return (
        <div className="row mt-5 mb-5 animate__animated animate__fadeInLeft">
            <div className="col-5">
                <img
                    className="img-thumbnail"
                    alt={`Pokemon ${id}`}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
                />
            </div>
            <div className="col-7">
                <h3>{pokemon.name}</h3>
                <hr/>
                <p>{pokemon.xdescription}</p>
                <p><b>Height: </b>{pokemon.height}</p>
                <p><b>Weight: </b>{pokemon.weight}</p>
                <p>
                    <b>Types:</b> {pokemon.typeofpokemon && pokemon.typeofpokemon.join(" / ")}
                </p>
                <p>
                    <b>Weakness:</b> {pokemon.weaknesses && pokemon.weaknesses.join(" / ")}
                </p>
                <p>
                    <b>Abilities:</b> {pokemon.abilities && pokemon.abilities.join(" / ")}
                </p>
                <hr/>
                <ul className="list-group list-group-flush">
                    <h5>Stats</h5>
                    <li className="list-group-item"><b>HP: </b>{pokemon.hp}</li>
                    <li className="list-group-item"><b>Attack: </b>{pokemon.attack}</li>
                    <li className="list-group-item"><b>Defense: </b>{pokemon.defense}</li>
                    <li className="list-group-item"><b>Special attack: </b>{pokemon.special_attack}</li>
                    <li className="list-group-item"><b>Special defense: </b>{pokemon.special_defense}</li>
                    <li className="list-group-item"><b>Speed: </b>{pokemon.speed}</li>
                    <li className="list-group-item"><b>HP: </b>{pokemon.hp}</li>
                </ul>
                <hr/>
                <p>
                    <b>Evolution line:</b> {evolutionLine && evolutionLine.join(" / ")}
                </p>
                <button 
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
