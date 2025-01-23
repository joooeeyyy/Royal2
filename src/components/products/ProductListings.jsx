import { useContext } from "react";
import styled from "@emotion/styled";

import ProductCard from "./ProductCard";
import {
  boot1,
  boot2,
  boot3,
  eyeprotection,
  goggles,
  goggles2,
  helmet,
  helmet2,
  helmet3,
  flotationjacket,
  vest2,
  vest3,
  earprotection,
  headphones,
  headphones2,
  gloves,
  gloves2,
  gloves3,
} from "../../assets";
import { ProductContext } from "../../contexts/ProductContext";
import WriteUpBox from "./WriteUpBox";

const ProductListings = () => {
  const { currentCategoryIndex, isJustWriteUp, currentWriteUpIndex } =
    useContext(ProductContext);

  const headProtection = [
    {
      image: helmet,
      name: "Hard hat helmet",
      description: "Excellent protection for the head during ...",
    },
    {
      image: helmet2,
      name: "Hard hat helmet",
      description: "Excellent protection for the head during ...",
    },
    {
      image: helmet3,
      name: "Hard hat helmet",
      description: "Excellent protection for the head during ...",
    },
  ];

  const eyeProtection = [
    {
      image: eyeprotection,
      name: "Safety goggles",
      description: "Protects the eyes during welding, metal works...",
    },
    {
      image: goggles,
      name: "Safety goggles",
      description: "Protects the eyes during welding, metal works...",
    },
    {
      image: goggles2,
      name: "Safety goggles",
      description: "Protects the eyes during welding, metal works...",
    },
  ];

  const safetyVests = [
    {
      image: vest2,
      name: "Military vest",
      description:
        "we have these ready in different sizes, they range from bonded leather...",
    },
    {
      image: flotationjacket,
      name: "Flotation  vest",
      description:
        "we have these ready in different sizes, they range from bonded leather...",
    },
    {
      image: vest3,
      name: "Double padded bulletproof vest...",
      description:
        "we have these ready in different sizes, they range from bonded leather...",
    },
  ];

  const safetyBoots = [
    {
      image: boot1,
      name: "Tough Leather Boots",
      description:
        "Designed for construction, military, mining, fortified with anti collision...",
    },
    {
      image: boot2,
      name: "Tough Leather Boots",
      description:
        "Designed for construction, military, mining, fortified with anti collision...",
    },
    {
      image: boot3,
      name: "Tough Leather Boots",
      description:
        "Designed for construction, military, mining, fortified with anti collision...",
    },
  ];
  const earProtection = [
    {
      image: earprotection,
      name: "Safety headphones",
      description: "Designed for sound proof and noise barrier...",
    },
    {
      image: headphones,
      name: "Safety headphones",
      description: "Designed for sound proof and noise barrier...",
    },
    {
      image: headphones2,
      name: "Safety headphones",
      description: "Designed for sound proof and noise barrier...",
    },
  ];
  const safetyGloves = [
    {
      image: gloves,
      name: "Impact-Resistant Gloves",
      description: "Rubberized knuckles and backs provide additional...",
    },
    {
      image: gloves2,
      name: "Leather work gloves",
      description:
        "ideal for heavy-duty work with excellent abrasion resistance and...",
    },
    {
      image: gloves3,
      name: "Cut-Resistant Gloves",
      description:
        "HPPE liners or stainless steel mesh offer high levels of cut...",
    },
  ];

  const products = [
    headProtection,
    eyeProtection,
    safetyVests,
    safetyBoots,
    earProtection,
    safetyGloves,
  ][currentCategoryIndex];

  const listOfWriteUp = [
    "From minor scratches to major cracks , we specialize in restoring your bumpers ,Fenders , Hoods , Quarter Panels , Running boards , Truck lids e.t.c and general overall of the exterior body of the vehicle by our experts. we use state of the act advance equipments and materials to ensure seamless repairs its original condition .You can reply on our certified technicians to handle your auto collision and painting needs",
    "Unleash your vehicle personality with our comprehensive auto customization services. From aesthetic upgrades to functional enhancements , our team collaborates closely with you to bring your vision to life . weather it is custom bodywork , interior upgrades , or performance twearks , we ensure your car is a true reflection of your style and needs",
    "Give your car a fresh vibrant look with our professional vehicle painting services. Be it a fully body repaint , color changes , or touch up , we use OEM paints and precision techniques to achieve a flawless finish. Our work not only enhances your vehicle aesthetics but also protects it from enviromental damage by applying anti ultraviolet coating in our refinishing , ensuring lasting beauty. ",
    "Make a bold statement with our exterior customization services . From custom decals and wraps to unique body modifications , we transform your vehicles exterior to stand out on the road. with a keen eye for detail and a commitment to quality , we deliver stunning results that match your vision and exceed your expectation",
  ][currentWriteUpIndex];

  return (
    <Container>
      <Div>
        {!isJustWriteUp ? (
          products.map(({ name, image, description }, index) => (
            <ProductCard
              key={index}
              image={image}
              name={name}
              description={description}
            />
          ))
        ) : (
          <WriteUpBox>{listOfWriteUp}</WriteUpBox>
        )}
      </Div>
    </Container>
  );
};

export default ProductListings;

const Container = styled.div`
  width: 70%;
  min-height: 30rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; /* Single column by default */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns on large screens */
  }
`;
