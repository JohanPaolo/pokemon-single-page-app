import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const PokemonCard = ({
  name,
  id,
  imageurl,
  xdescription,
  ydescription,
  height,
  category,
  weight,
  typeofpokemon,
  weaknesses,
  evolutions,
  abilities,
  hp,
  attack,
  defense,
  special_attack,
  special_defense,
  speed,
  total,
  male_percentage,
  female_percentage,
  genderless,
  cycles,
  egg_groups,
  evolvedfrom,
  reason,
  base_exp,
}) => {
  // Necesario para convertir los id de #(number) a (number)
  const pokemonId = id.slice(1);

  const [imagen, setImagen] = useState(null);

  const cargarImagen = async () => {
    try {
      // Llamar a la función getImgbyId para obtener la imagen
      const img = new Image();
      img.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`;
      setImagen(img);
    } catch (error) {
      console.error(`Error al cargar la imagen: ${error.message}`);
    }
  };

  useEffect(() => {
    cargarImagen();
  }, [pokemonId]);

  return (
  <div className="col animate__animated animate__fadeIn">
    <div className="card p-2">
      <div className="row no-gutters">
        <div className='col-5 pl-2'>
          {imagen && <img src={imagen.src} alt={`Pokemon ${pokemonId}`} className="card-img-top img-fluid" />}
        </div>
        <div className="col-7">
          <div className="card-body">
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>
              <b>Types:</b> {typeofpokemon && typeofpokemon.join(" / ")}
            </p>
            <p className='card-text'>
              <b>Weakness:</b> {weaknesses && weaknesses.join(" / ")}
            </p>
            <p className='card-text'>
              <b>Abilities:</b> {abilities && abilities.join(" / ")}
            </p>

            {/* <Link to={`/pokemon/${id}`} >
              Más
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
