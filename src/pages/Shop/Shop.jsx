import Container from "../../components/Container";
import Hero from "../../pages/Home/Hero";
import ShopProduct from "./ShopProduct";

const Shop = () => {
  return (
    <Container>
      <div className="my-3">
        <Hero />
      </div>
      <h2 className=" text-center text-2xl">Mavjud Avtomobillar</h2>

      <ShopProduct />
    </Container>
  );
};
export default Shop;
