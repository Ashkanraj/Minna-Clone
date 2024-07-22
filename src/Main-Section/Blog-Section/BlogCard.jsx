const BlogCard = (props) => {
  return (
    <figure className="w-full  rounded-[15px] flex justify-center sm:w-5/12 lg:w-3/12">
      <img
        src={props.img}
        width={400}
        height={400}
        alt="blog image"
        className="w-full h-auto max-w-[400px] max-h-[400px] rounded-[15px] cursor-pointer transition-all hover:brightness-50 "
      />
    </figure>
  );
};

export default BlogCard;
