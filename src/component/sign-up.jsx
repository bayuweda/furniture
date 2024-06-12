export default function SignUp() {
  return (
    <>
      <section className="">
        <div className="bg-hero-pattern3  bg-cover flex justify-center items-start pt-32 pb-56">
          <div className="flex-col  w-1/2 ">
            <div className="text-center w-96 mx-auto text-white">
              <h1 className=" font-light text-base tracking-widest">
                KEEP UPDATE
              </h1>
              <h1 className=" text-xl mt-4 md:hidden sm:hidden lg:block tracking-widest">
                SIGN UP TO OUR Newsletter
              </h1>
              <h1 className=" text-sm mt-4 md:hidden sm:hidden lg:block tracking-widest">
                DISCOVER NEWS, OFFERS AND MORE
              </h1>
            </div>
            <form
              className="mt-7 flex items-center gap-1 justify-center"
              action=""
            >
              <input
                className=" p-2 border-white border-2 w-1/2 text-gray-800 bg-transparent"
                type="text"
                placeholder="Your email"
              />
              <button className="px-8  bg-white text-slate-950 font-light p-2 uppercase ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
