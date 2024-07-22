import BlogCard from "./BlogCard";
import Img1 from "./assets/image-asset1.jpeg";
import Img2 from "./assets/image-asset2.jpeg";
import Img3 from "./assets/image-asset3.jpeg";

const Blog = () => {
  return (
    <section className="w-full text-darkgreen p-10 flex flex-col items-center gap-6">
      <h1 className="text-4xl">
        <a href="https://www.instagram.com/drinkminna/">@drinkminna</a>
      </h1>
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-evenly">
        <BlogCard img={Img1} />
        <BlogCard img={Img2} />
        <BlogCard img={Img3} />
      </div>
    </section>
  );
};

export default Blog;
