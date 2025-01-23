import {
  Jumbotron,
  ProductCategories,
  ProductService,
} from "../../components/home";

const home = () => {
  return (
    <div>
      <Jumbotron />
      <ProductService />
      <ProductCategories />
    </div>
  );
};

export default home;
