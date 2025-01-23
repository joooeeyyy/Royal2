/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import Text from "../../components/shared/Text";

const ProductCard = ({ image, name, description }) => {
  return (
    <Container>
      <Img src={image} />

      <Details>
        <Text fontWeight={500} fontSize={"16px"} marginBottom=".5rem">
          {name}
        </Text>
        <Text fontSize={"12px"}>{description}</Text>
      </Details>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    -168.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  height: 23rem;
  border-radius: 5px;
  padding: 1rem;
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
    width: 100%;
  }
`;

const Details = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
