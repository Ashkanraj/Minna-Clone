import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <section id="products">
      <SingleProduct product="peach" />
      <SingleProduct product="orange" />
      <SingleProduct product="pineapple" />
      <SingleProduct product="cherry" />
      <SingleProduct product="lime" />
      <SingleProduct product="varietyPack" />
    </section>
  );
};

export default Products;
