import React, { useState } from "react";
import Navbar from "./component/navbar"; // Pastikan path impor benar

function ProductCard({ id, name, image, price, addToCart }) {
  return (
    <>
      <main className="h-96 bg-white/50 flex flex-col justify-between  relative">
        <div className="absolute w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-white/50">
          <button
            className="bg-slate-900 px-4 py-2 text-white"
            onClick={() => addToCart(id)}
          >
            ADD TO CART
          </button>
        </div>
        <img src={image} alt="" className="w-full h-3/4 object-cover" />
        <div className="flex flex-col justify-center gap-4 p-2 h-full">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p>{price}</p>
        </div>
      </main>
    </>
  );
}

const shopProduct = [
  {
    id: 1,
    name: "Hudson Sofa",
    image: "/assets/sofa (4).png",
    price: "RP 500,000",
  },
  {
    id: 2,
    name: "Beige Sofa",
    image: "/assets/sofa (2).png",
    price: "Rp 1,000,000",
  },
  {
    id: 3,
    name: "Corner Sofa",
    image: "/assets/sofa (3).png",
    price: "Rp 700,000",
  },
  {
    id: 4,
    name: "Chaise Sofas",
    image: "/assets/sofa (4).png",
    price: "Rp 900,000",
  },
  {
    id: 5,
    name: "Chaise Sofas",
    image: "/assets/sofa (4).png",
    price: "Rp 900,000",
  },
  {
    id: 6,
    name: "Chaise Sofas",
    image: "/assets/sofa (4).png",
    price: "Rp 900,000",
  },
  {
    id: 7,
    name: "Corner Sofa",
    image: "/assets/sofa (3).png",
    price: "Rp 700,000",
  },
  {
    id: 8,
    name: "Beige Sofa",
    image: "/assets/sofa (2).png",
    price: "Rp 1,000,000",
  },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <section className="container mx-auto  pt-32">
        <main className="bg-shop-banner h-80 bg-no-repeat   ">
          <div className=" h-full w-full backdrop-blur-sm bg-white/15  flex justify-center items-center">
            <h1 className="text-white text-4xl font-semibold">SHOP</h1>
            <h1>
              <a href="/">HOME</a>
            </h1>
          </div>
        </main>
        <div className="grid grid-cols-4 gap-4 pt-4">
          {shopProduct.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              addToCart={addToCart} // Kirimkan addToCart sebagai prop
            />
          ))}
        </div>
      </section>
    </>
  );
}
