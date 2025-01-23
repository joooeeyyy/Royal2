import React from "react";
import styled from "@emotion/styled";
import Text from "../shared/Text";

const WriteUpBox = (props) => {
  return (
    <Container>
      <Text fontSize="32px">{props.children}</Text>
    </Container>
  );
};

export default WriteUpBox;

const Container = styled.div`
  /* width: 100%; */
  width: 50rem;
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  /* height: 23rem; */
  height: 33rem;
  border-radius: 5px;
  padding: 1rem;
  margin-right: 1rem;
  padding-bottom: 2rem;
  cursor: pointer;
  transition: 0.2s ease;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 960px) {
    /* width: 100%; */
    width: 25rem;
  }
`;
