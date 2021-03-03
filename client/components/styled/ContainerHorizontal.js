import styled from "styled-components";

export default styled.div`
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
