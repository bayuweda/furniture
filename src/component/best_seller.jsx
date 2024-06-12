const projects = [
  {
    id: 1,
    title: "Hudson Click Clack Sofa Bed - Forest Green",
    image: "/assets/sofa (1).png",
    price: "RP 500,000",
  },
  {
    id: 2,
    title: "2 seater sofa in beige, 210 cm",
    image: "/assets/sofa (2).png",
    price: "Rp 1000,000",
  },
  {
    id: 3,
    title: "Left hand facing cORNER sofa",
    image: "/assets/sofa (3).png",
    price: "Rp 700,000",
  },
  {
    id: 4,
    title: "Left hand facing chaise sofas",
    image: "/assets/sofa (4).png",
    price: "Rp 900,000",
  },
];

// eslint-disable-next-line react/prop-types
function Card({ image, price, title }) {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/4 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 ">
        <img src={image} alt="" className="w-full" />
        <div className="px-2 py-4">
          <h1 className="text-primary text-center tracking-wide">{title}</h1>
          <p className="text-center mt-4">{price}</p>
        </div>
      </div>
    </>
  );
}

export default function BestSeller() {
  return (
    <>
      <section id="projek" className=" ">
        <div className="container mx-auto h-dvh">
          <div className="flex flex-wrap ">
            <div className="text-center w-96 mx-auto ">
              <h1 className="text-black font-light text-base tracking-widest">
                DISCOVER OUR BEST SELLERS
              </h1>
              <h1 className="text-black  text-2xl mt-4 md:hidden sm:hidden lg:block tracking-widest">
                SOFAS AND CORNER SOFAS
              </h1>
            </div>
            <div className="flex  justify-center mt-10 gap-5">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  image={project.image}
                  price={project.price}
                  title={project.title}
                />
              ))}
            </div>

            <div className="text-center mt-10 mx-auto ">
              <button className="bg-primary px-4 py-2 inline-flex items-center rounded-sm text-xl text-white mx-auto">
                View all Mill Sets
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
