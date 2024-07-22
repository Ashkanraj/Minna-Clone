import CansData from "./CansData";
import newlabels from "./images/newlabels.png";

const SingleProduct = (props) => {
  const { product } = props;
  let data = {};
  switch (product) {
    case "peach":
      data = CansData.peach;
      break;
    case "orange":
      data = CansData.orange;
      break;
    case "pineapple":
      data = CansData.pineapple;
      break;
    case "cherry":
      data = CansData.cherry;
      break;
    case "lime":
      data = CansData.lime;
      break;
    case "varietyPack":
      data = CansData.varietyPack;
      break;
  }
  return (
    <section
      style={{
        backgroundColor: data.color,
      }}
      className="flex flex-col py-10 px-10 lg:flex-row lg:items-center"
    >
      <figure className="my-16 lg:w-1/2">
        {
          <img
            src={data.img}
            width={500}
            height={500}
            alt="minna can"
            className="w-full"
          />
        }
      </figure>
      <div className="flex flex-col gap-8 text-darkgreen lg:w-1/2">
        <h1 className="text-4xl font-bold lg:text-5xl">{data.title}</h1>
        <div className="w-full bg-darkgreen h-[2px]"></div>
        <p className="text-lg ">{data.desc.p1}</p>
        <p className="text-lg ">{data.desc.p2}</p>
        <p className="text-lg ">{data.desc.p3}</p>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row lg:gap-10">
          <figure>
            <img
              src={newlabels}
              width={250}
              height={150}
              alt="lables"
              className="w-2/3 mx-auto lg:w-52 lg:mx-0 "
            />
          </figure>
          <button className="btn btn-primary w-full sm:w-2/3 lg:w-1/2">
            <a href={data.url} target="_blank" className="block">
              order online
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
