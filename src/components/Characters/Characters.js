import { useState } from "react";
import { useQuery } from "react-query";
import Character from "../Character/Character";
import {
  Section,
  Container,
  Buttons,
  SpinnerContainer,
  ErrorContainer,
} from "./CharactersStyles";
import CircularProgress from "@mui/material/CircularProgress";

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

  if (isLoading)
    return (
      <SpinnerContainer>
        <CircularProgress />
      </SpinnerContainer>
    );

  if (error)
    return (
      <ErrorContainer>
        <p>An error has occurred {error.message}</p>
      </ErrorContainer>
    );
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
