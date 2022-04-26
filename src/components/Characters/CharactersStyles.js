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
  }
  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;
`;
