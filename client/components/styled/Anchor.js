import styled from "styled-components";

export default styled.a`
  background-color: var(--cr-fondo-visible);
  border-radius: var(--px-padding-base);
  border: 1px solid var(--cr-fondo-visible);
  display: inline-block;
  color: white;
  font-weight: 500;
  padding: var(--px-padding-base) 30px;
  text-align: center;
  &:active {
    position: relative;
    top: 1px;
    border: 1px solid var(--cr-fondo-visible);
    border-radius: var(--px-padding-base);
    background-color: var(--cr-fondo-claro);
    color: var(--cr-texto-alterno);
  }
`;
