import minnaLogo from "../assets/minna-logo.png";
import React from "react";

const Header = () => {
  const [isMenu, setIsMenu] = React.useState(false);

  const handleMenuButton = () => {
    setIsMenu((previousState) => {
      return !previousState;
    });
  };

  return (
    <header className="w-full fixed px-10 flex justify-between items-center backdrop-blur-lg z-10">
      <a href="#home" className="text-darkgreen py-6 lg:py-0">
        <img
          src={minnaLogo}
          width={"150px"}
          height={"150px"}
          alt="minna-logo"
        />
      </a>
      <span className="lg:hidden">
        <i
          onClick={handleMenuButton}
          className="fa-solid fa-bars text-xl text-darkgreen cursor-pointer hover:brightness-150 focus:brightness-150"
        ></i>
      </span>
      <section
        style={{
          left: isMenu ? "0" : "-100%",
        }}
        className="absolute w-full h-[100vh] top-0 transition-all lg:static lg:h-auto lg:w-1/2"
      >
        <ul className="h-full w-full bg-pineapple text-4xl text-darkgreen  lg:flex lg:text-lg lg:bg-transparent">
          <li className="w-full lg:w-1/3">
            <a
              href="#products"
              className="w-full block p-8 transition-colors hover:bg-darkgreen hover:text-pink-50 focus:bg-darkgreen focus:text-pink-50 lg:py-6 lg:text-center lg:p-0"
            >
              Shop Tea
            </a>
          </li>
          <li className="w-full lg:w-1/3">
            <a
              href="#locations"
              className="w-full block p-8 transition-colors  hover:bg-darkgreen hover:text-pink-50 focus:bg-darkgreen focus:text-pink-50 lg:py-6 lg:text-center lg:p-0"
            >
              Find in Store
            </a>
          </li>
          <li className="w-full lg:w-1/3">
            <a
              href="https://www.amazon.com/Minna-Sparkling-Hibiscus-Unsweetened-Friendly/dp/B07NQR7HGF/ref=sr_1_2?keywords=minna&qid=1585578405&sr=8-2"
              target="_blank"
              className="w-full block p-8 transition-colors hover:bg-darkgreen hover:text-pink-50 focus:bg-darkgreen focus:text-pink-50 lg:py-6 lg:text-center lg:p-0"
            >
              Amazon
            </a>
          </li>
        </ul>
        <span className="lg:hidden">
          <i
            onClick={handleMenuButton}
            className="fa-solid fa-close text-4xl text-darkgreen absolute top-8 right-8 cursor-pointer z-10 hover:brightness-150"
          ></i>
        </span>
      </section>
    </header>
  );
};

export default Header;
