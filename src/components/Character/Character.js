import { CharacterCard } from "./CharacterStyles";

function Character({ char }) {
  return (
    <CharacterCard>
      <h2>{char.name}</h2>
      <ul>
        <li>born: {char.birth_year}</li>
        <li>gender: {char.gender}</li>
        <li>height: {char.height} cm</li>
        <li>hair color: {char.hair_color}</li>
      </ul>
    </CharacterCard>
  );
}

export default Character;
