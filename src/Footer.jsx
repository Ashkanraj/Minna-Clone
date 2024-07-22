import MinnaLogo from "./assets/minna-logo-white.png";

const Footer = () => {
  return (
    <section className="p-10 bg-darkgreen text-pink-50 w-full flex flex-col gap-8 items-center sm:flex-row sm:items-center sm:justify-between sm:gap-0">
      <div className="flex flex-col gap-8 sm:w-1/2 lg:w-2/3">
        <a href="#home" className="w-full sm:w-1/3">
          <img
            src={MinnaLogo}
            alt="minna logo"
            width={150}
            height={150}
            className="w-full max-w-[300px] "
          />
        </a>
        <ul className="text-lg flex flex-col gap-6 underline tracking-[4px] text-center font-semibold underline-offset-[5px] decoration-1 decoration-gray-300 sm:text-sm sm:text-left lg:text-lg">
          <li>
            <a href="" className="hover:brightness-50 transition-all">
              ORDERING
            </a>
          </li>
          <li>
            <a href="" className="hover:brightness-50 transition-all">
              PAYMENTS
            </a>
          </li>
          <li>
            <a href="" className="hover:brightness-50 transition-all">
              CONTACT
            </a>
          </li>
          <li>
            <a href="" className="hover:brightness-50 transition-all">
              SHIPPING
            </a>
          </li>
          <li className="text-3xl flex justify-center gap-4 sm:text-xl sm:justify-start lg:text-2xl">
            <a
              href="https://www.instagram.com/drinkminna/"
              target="_blank"
              className="hover:brightness-50 focus:brightness-50"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/drinkminna"
              target="_blank"
              className="hover:brightness-50 focus:brightness-50"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.pinterest.com/drinkminna/_created/"
              target="_blank"
              className="hover:brightness-50 focus:brightness-50"
            >
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="my-10 flex flex-col justify-center gap-4 sm:w-1/2 lg:w-1/3">
        <h1 className="text-3xl text-center">Get the Latest Tea</h1>
        <p className="text-center">
          Enter your email for newsletters and updates.
        </p>
        <form action="#" className="flex flex-col gap-4 w-full items-center">
          <input
            type="text"
            className="w-full px-5 py-4 rounded-[15px] border-none outline-none text-darkgreen max-w-[500px] focus:bg-pink-200"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="w-full btn btn-secondary min-w-40 max-w-[500px]"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
