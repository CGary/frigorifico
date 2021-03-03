import styled from "styled-components";

export default styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: var(--px-padding-base);
  align-content: start;
  justify-items: start;
  padding: var(--px-padding-base);

  .btncontainer {
    justify-self: center;
  }
`;
