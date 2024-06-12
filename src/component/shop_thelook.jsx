import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";

const product = [
  {
    Image: "/assets/sofalook1.png",
    name: "CILL-SEEKER CHAISE SOFA",
    price: "$2999",
  },
  {
    Image: "/assets/sofalook2.png",
    name: "CILL-SEEKER CHAISE SOFA",
    price: "$2799",
  },
  {
    Image: "/assets/sofalook3.png",
    name: "CILL-SEEKER CHAISE SOFA",
    price: "$2909",
  },
];

export default function ShopLook() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <>
      <section className="container mx-auto mt-24">
        <div className="text-center w-96 mx-auto ">
          <h1 className="text-black font-light text-base tracking-widest">
            HOME INSPIRATION
          </h1>
          <h1 className="text-black  text-2xl mt-4 md:hidden sm:hidden lg:block tracking-widest">
            SHOP THE LOOK
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-1/3">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              onChange={handleCarouselChange}
            >
              <div>
                <img src="/assets/ShopTheLook.png" alt="" />
              </div>
              <div>
                <img src="/assets/ShopTheLook.png" alt="" />
              </div>
              <div>
                <img src="/assets/ShopTheLook.png" alt="" />
              </div>
            </Carousel>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <div className="flex-col flex  gap-12">
              <img
                src={product[selectedImageIndex].Image}
                alt=""
                className="w-full"
              />
              <div>
                <h1 className="pb-2">{product[selectedImageIndex].name}</h1>
                <p>{product[selectedImageIndex].price}</p>
              </div>
              <button className="bg-slate-950 text-white py-2 px-4">
                View this product
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
