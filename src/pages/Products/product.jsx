import { Body, Jumbotron } from "../../components/products";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  color: #fff;
`;

const product = () => {
  return (
    <Container>
      <Jumbotron />
      <Body />
    </Container>
  );
};

export default product;
