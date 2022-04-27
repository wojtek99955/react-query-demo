import styled from "styled-components";

export const Section = styled.section``;
export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;
export const Buttons = styled.div`
  button {
    background-color: #1c1e22;
    color: #ffe301;
    border: none;
    padding: 0.6rem 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;

    &:disabled {
      background-color: #b8bcc4;
      color: #ffff65;
      cursor: default;
    }
  }
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  max-width: 200px;
  margin: auto;
  p {
    color: red;
  }
`;
