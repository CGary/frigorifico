import styled from "styled-components";

export default styled.div`
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
