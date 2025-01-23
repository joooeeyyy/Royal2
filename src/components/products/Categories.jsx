import { useContext } from "react";
import styled from "@emotion/styled";

import Text from "../shared/Text";
import { ProductContext } from "../../contexts/ProductContext";

const Categories = () => {
  const { currentCategoryIndex, setCurrentCategoryIndex, setWriteUpIndex } =
    useContext(ProductContext);

  const categoryItems = [
    "Head protection",
    "Eye protection",
    "Safety vests",
    "Safety Boots",
    "Ear protection",
    "Safety gloves",
  ];

  const carCategoryOptions = [
    "Bumper Repair",
    "Exterior Body Restoration",
    "Vehicle Painting",
    // "Auto Exterior Customization",
  ];

  const handleCategorySelect = (index) => {
    setWriteUpIndex(index);
    setCurrentCategoryIndex(index);
  };

  return (
    <Container>
      <Text fontSize="32px">Select a Category</Text>
      <Div>
        {carCategoryOptions.map((item, index) => (
          <Item
            key={index}
            active={index === currentCategoryIndex}
            onClick={() => handleCategorySelect(index)}
          >
            <Text>{item}</Text>
          </Item>
        ))}
      </Div>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 30%;
  color: #fff;
  min-height: 30rem;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    width: 100%;
    padding: 10px;
  }
`;

const Div = styled.div`
  margin-top: 2rem;
  background: #222;
  width: 100%;
  border-radius: 2px;
  padding: 5px;
`;

const Item = styled.div`
  padding: 1rem;
  background: ${(props) =>
    props.active
      ? `linear-gradient(
  157.81deg,
  #fffffe -43.27%,
  #fffffd -21.24%,
  #fffffc 12.19%,
  #ffff9b 29.82%,
  #ffff77 51.94%,
  #fff100 90.29%

);`
      : "none"};
  color: ${(props) => (props.active ? "#000" : "#fff")};
  border-radius: ${(props) => (props.active ? "5px" : "0px")};
  /* border-bottom: 1px solid #fff; */
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      157.81deg,
      #fffffe -43.27%,
      #fffffd -21.24%,
      #fffffc 12.19%,
      #ffff9b 29.82%,
      #ffff77 51.94%,
      #fff100 90.29%
    );
    color: #000;
    border-radius: 5px;
  }
`;
