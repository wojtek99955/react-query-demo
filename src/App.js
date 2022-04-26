import { useState } from "react";
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
const Buttons = styled.div`
  button {
    background-color: #1c1e22;
    color: #ffe301;
    border: none;
    padding: 0.6rem 1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;
`;

function App() {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery(
    ["people", page],
    ({ queryKey }) =>
      fetch(`https://swapi.dev/api/people/?page=${queryKey[1]}`).then((res) =>
        res.json()
      )
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
      <Buttons>
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          prev
        </button>
        <button
          disabled={!data.next}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      </Buttons>
    </Section>
  );
}

export default App;
