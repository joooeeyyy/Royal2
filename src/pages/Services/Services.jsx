import {
  Jumbotron,
  Services,
  OtherServices,
  AboutServices,
} from "../../components/services";
import styled from "@emotion/styled";
import { ServiceProvider } from "../../contexts/ServicesContext";

const Container = styled.div`
  padding: 5rem 0rem;
  background: #00040e;
  color: #fff;
`;

const services = () => {
  return (
    <Container>
      {/* <Spacer /> */}
      <Jumbotron />
      <AboutServices />
      <Services />
      <OtherServices />
    </Container>
  );
};

export default services;
