import { getImageUrl } from './utils.js'; //El reciclaje es buenoo :D
import './App.css' 

function Avatar ({person, size}){
  const awardsArray = Array.isArray(person.awards) ? person.awards : [];//awards es un arreglo de texto

  return(
    <div className='card'>
      <h1> {person.name} </h1>
      <img
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <div className='paragraph'>
        <h3>Profesión: </h3>
        <p>{person.profession}</p>
      </div>
      <div className='paragraph'>
        <h3>Premios: </h3>
        <h3>{person.awards.length}</h3>
        <p> ({awardsArray.join(", ")})</p>
      </div>
      <div className='paragraph'>
        <h3>Descubrió: </h3>
        <p>{person.discovery}</p>
      </div>
    </div>
  );
}


export default function Profile(){
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Avatar
        size={100}
        person={{
          name: 'Maria Skłodowska-Curie',
          imageId: 'UWf9WvS',
          profession: 'física y química',
          awards:['Premio Nobel de Física','Premio Noobel de Química','Medalla Davy','Medalla Matteucci'],
          discovery: 'Polonio (elemento químico)'
        }}
      />
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhshi',
          imageId: 'YfeOqp2',
          profession: 'geoquímica',
          awards:['Premio Miyake de geoquímica','Premio Tanaka'],
          discovery: 'un método para medir el dióxido de carbono en el agua de mar'
        }}
      />
    </div>
  );
}
