import { people } from './data.jsx';
import '../App.css'

export default function RenderingLists() {
  const listItems = people.map(person =>
    <li className='list-elements' key={person.id}>
      <img
        src={'https://i.imgur.com/' +
        person.imageId +
        's.jpg'}
        alt={person.name}
      />
      <div>
      <h3>{person.name}:</h3>
      <p>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
      </div>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
