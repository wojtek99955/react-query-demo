import { useQuery } from "react-query";
import styled from "styled-components";
const Section = styled.section``;
const Container = styled.div``;
const CharacterCard = styled.div`
  padding: 2rem;
  border: 1px solid grey;
  max-width: 500px;
  margin: auto;
  margin-bottom: 2rem;
  h2 {
    text-align: center;
  }
  li {
    list-style-type: none;
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
        <ul>
          {data.results.map((char) => {
            return (
              <CharacterCard>
                <h2>{char.name}</h2>
                <li>born: {char.birth_year}</li>
                <li>gender: {char.gender}</li>
              </CharacterCard>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

export default App;
