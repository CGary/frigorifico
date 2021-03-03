import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-row-gap: var(--px-alto-subheader);
  justify-items: center;
  margin: var(--px-alto-subheader) auto;
  form {
    display: grid;
    grid-row-gap: 10px;
    min-width: 350px;
  }
  img {
    height: 64px;
    width: 64px;
  }
`;
