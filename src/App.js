import { useQuery } from "react-query";
import styled from "styled-components";
const Section = styled.section``;
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;
const CharacterCard = styled.div`
  padding: 2rem;
  border-radius: 5px;
  margin: auto;
  background-color: #272b30;
  width: 100%;
  h2 {
    text-align: center;
    color: white;
    margin-bottom: 1rem;
  }
  li {
    list-style-type: none;
    color: white;
    margin-bottom: 0.6rem;
  }
`;

function App() {
  const { isLoading, error, data } = useQuery("people", () =>
    fetch("https://swapi.dev/api/people/?page=1").then((res) => res.json())
  );
  console.log(data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <Section>
      <Container>
        {data.results.map((char) => {
          return (
            <CharacterCard>
              <h2>{char.name}</h2>
              <ul>
                <li>born: {char.birth_year}</li>
                <li>gender: {char.gender}</li>
                <li>height: {char.height} cm</li>
              </ul>
            </CharacterCard>
          );
        })}
      </Container>
    </Section>
  );
}

export default App;
