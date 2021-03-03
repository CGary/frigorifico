import styled from "styled-components";

export default styled.button`
  background-color: var(--cr-fondo-visible);
  border-radius: 6px;
  border: 1px solid var(--cr-fondo-visible);
  display: inline-block;
  cursor: pointer;
  color: white;
  font-weight: 500;
  padding: var(--px-padding-base) 30px;
  text-align: center;
  &:active {
    border: 1px solid var(--cr-fondo-visible);
    background-color: var(--cr-fondo-claro);
    color: var(--cr-texto-alterno);
    position: relative;
    top: 1px;
  }
`;
