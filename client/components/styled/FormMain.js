import styled from "styled-components";
import ContainerVertical from "./ContainerVertical";

export default styled(ContainerVertical)`
  display: grid;
  grid-template-columns: auto calc(2.5 * var(--px-alto-header));
  grid-gap: var(--px-padding-base);
  margin: var(--px-padding-base);
  color: var(--cr-texto-normal);
  align-content: start;

  .form-span {
    grid-column-end: span 2;
  }

  .form-center {
    text-align: center;
  }

  .form-anchor {
    grid-column-end: span 2;
    justify-self: center;
  }
  .form-dual {
    grid-column-end: span 2;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: var(--px-padding-base);
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  min-height: calc(2 * var(--px-alto-header));
  padding: var(--px-padding-base);
`;
