import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

const MyCarousel = () => {
  return (
    <section className="container mx-auto pt-28 relative">
      <div className="text-white w-80 absolute z-10 bottom-0 mb-20 ml-12">
        <h1 className="text-base font-extralight pb-4">DESIGNED IN London</h1>
        <h1 className="text-2xl font-extralight tracking-widest pb-4">
          TIMELESS ELEGANCE
        </h1>
        <button className="px-4 bg-white py-3 text-primary">
          <a href="../shop">SHOP NOW</a>
        </button>
      </div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
        <div className="carousel-slide bg-hero-pattern costum-height bg-cover bg-center flex justify-start items-end p-14">
          <div className="content-overlay"></div>
        </div>
        <div className="carousel-slide bg-hero-pattern2 costum-height bg-cover bg-center flex justify-start items-end p-14">
          <div className="content-overlay"></div>
        </div>
      </Carousel>
    </section>
  );
};

export default function HeroSection() {
  return (
    <>
      <MyCarousel />
    </>
  );
}
