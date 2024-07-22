import Minna_Love from "../assets/minna-choose-love.png";
const Advocation = () => {
  return (
    <section
      id="advocation"
      className="bg-cover bg-fixed bg-top flex flex-col py-16 px-10 lg:flex-row-reverse lg:gap-4 lg:items-center"
    >
      <figure className="w-full flex justify-center lg:w-1/2">
        <img
          src={Minna_Love}
          alt="mina choose love"
          width={500}
          height={500}
          className="max-w-[700px] w-full h-auto sm:w-2/3 lg:w-full"
        />
      </figure>
      <div className="text-darkgreen flex flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl">Minna advocates for inclusion.</h1>
        <div className="w-full h-[2px] bg-darkgreen"></div>
        <p className="text-lg">
          We wanted to create a better sparkling beverage, inside and out. Minna
          donates 1% of sales to non-profits advocating for inclusion.
        </p>
        <p className="text-lg">
          The first organization that we are partnering with is Help Refugees
          and Choose Love. Help Refugees has over 70 projects in Europe and the
          Middle East that provide emergency aid and long term solutions for
          people seeking refuge. Choose Love is the world’s first e-commerce
          store where all products purchased are donated directly to refugees in
          need.
        </p>
        <p className="text-lg">
          As we grow, we plan to diversify the use of funds to non-profits
          focused on helping those communities still fighting for equality.
        </p>
        <button className="btn btn-primary">
          <a href="#choose-love" className="block">
            Learn More
          </a>
        </button>
      </div>
    </section>
  );
};

export default Advocation;
