import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(${(e) => e.children.length}, 1fr);
  column-gap: var(--px-padding-base);
`;
