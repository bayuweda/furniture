import { useState } from "react";

const listAge = [
  {
    id: 1,
    title: "our story begins",
    year: "1975",
    image: "/assets/ageWrapper.png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
  {
    id: 2,
    title: "our story begins",
    year: "1981",
    image: "/assets/story (1).png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
  {
    id: 3,
    title: "our story begins",
    year: "1986",
    image: "/assets/story (2).png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
  {
    id: 4,
    title: "our story begins",
    year: "1911",
    image: "/assets/story (3).png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
  {
    id: 5,
    title: "our story begins",
    year: "2001",
    image: "/assets/ageWrapper.png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
  {
    id: 6,
    title: "our story begins",
    year: "2010",
    image: "/assets/ageWrapper.png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
  {
    id: 7,
    title: "our story begins",
    year: "2019",
    image: "/assets/ageWrapper.png",
    description:
      "Established as a family business in the City of London by Mark Smithwas initially founded as a sofa company and quickly and successfully expanded into general house furniture company.",
  },
];

// eslint-disable-next-line react/prop-types
function AgeCard({ title, year, image, description }) {
  return (
    <>
      <div className="flex justify-center gap-6 items-end">
        <div className="w-1/3">
          <img src={image} alt="" />
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <h1>{year}</h1>
          <h1 className="text-2xl">{title}</h1>
          <p className="text-slate-900">{description}</p>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ year, onClick }) {
  return (
    <>
      <button className="text-sm tracking-widest" onClick={() => onClick(year)}>
        {year}
      </button>
    </>
  );
}

export default function OurStroy() {
  const [show, setShow] = useState(listAge);

  const handleButton = (year) => {
    const filter = listAge.filter((item) => item.year === year);
    setShow(filter);
  };

  return (
    <>
      <section className="container mx-auto pt-28 ">
        <div className=" flex flex-col">
          {show.slice(0, 1).map((list) => (
            <AgeCard
              key={list.id}
              image={list.image}
              year={list.year}
              title={list.title}
              description={list.description}
            />
          ))}
        </div>

        <div className="flex gap-12 justify-center mt-6">
          {listAge.map((button) => (
            <Button key={button.id} year={button.year} onClick={handleButton} />
          ))}
        </div>
      </section>
    </>
  );
}
