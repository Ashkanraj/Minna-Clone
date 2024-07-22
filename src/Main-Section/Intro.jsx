const Intro = () => {
  return (
    <section
      id="intro"
      className="px-10 py-48 text-darkgreen  bg-center bg-cover bg-fixed flex flex-col items-center"
    >
      <h1 className="text-5xl font-bold text-center w-3/4  lg:w-1/2 lg:text-6xl">
        We’re the tea that pops.
      </h1>
      <p className="text-lg text-justify leading-relaxed font-medium mt-16 w-3/4  lg:w-1/2 lg:text-center lg:text-xl ">
        Intentionally brewed to be light, Minna makes the good stuff without all
        the… well… not so good stuff. It’s actually easier this way. Using only
        organic and non-gmo ingredients, with no sugars or added sweeteners, you
        can feel good about what we’re brewing. Refreshing, right?
      </p>
    </section>
  );
};

export default Intro;
