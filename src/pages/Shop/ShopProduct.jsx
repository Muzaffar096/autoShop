import products from "../../data/data.json";

const ShopProduct = () => {
  return (
    <section className=" grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-between mb-10">
      {products.map(
        (product, i) =>
          i < 10 && (
            <div className=" transition duration-300 my-10 transform hover:shadow-lg hover:scale-105 " key={product.id}>
              <img className="bg-[#FBFBFB] m-auto" width={240} src={product.image} alt="Image" />
              <p className="my-3 text-center text-[19px] uppercase text-[#3d3d3d]">{product.name}</p>
              <p className=" text-blue-800 text-center"> {product.price} <span className=" text-slate-700">so'mdan</span></p>
            </div>
          )
      )}
    </section>
  );
};

export default ShopProduct;
