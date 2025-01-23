import Market from "../../components/about/Market";
import { Jumbotron, Mission } from "../../components/about";
import styled from "@emotion/styled";

// eslint-disable-next-line react-refresh/only-export-components
const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  color: #fff;
`;

const product = () => {
  return (
    <Container>
      <Jumbotron />
      <Mission />
      <Market />
    </Container>
  );
};

export default product;
