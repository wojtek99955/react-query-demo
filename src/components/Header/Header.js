import styled from "styled-components";

const StyledHeader = styled.header`
  color: yellow;
  background-color: #373b40;
  padding: 1.5rem;
  margin-bottom: 3rem;
`;

function Header() {
  return <StyledHeader>Star Wars Characters</StyledHeader>;
}

export default Header;
