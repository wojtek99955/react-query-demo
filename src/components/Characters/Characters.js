import { useState } from "react";
import { useQuery } from "react-query";
import Character from "../Character/Character";
import { Section, Container, Buttons } from "./CharactersStyles";

function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${queryKey[1]}`
    );
    const data = response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery(
    ["people", page],
    fetchCharacters
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <Section>
      <Container>
        {data.results.map((char) => {
          return <Character char={char} />;
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

export default Characters;
