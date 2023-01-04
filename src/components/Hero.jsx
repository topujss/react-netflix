import bgImg from '../img/bg-nf.jpg';

export default function Hero() {
  return (
    <div className="hero relative bg-no-repeat bg-top px-24 pb-10 " style={{ background: `url(${bgImg})` }}>
      <section className="top flex justify-between py-14">
        <div className="logo">
          <img className="w-56" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        </div>
        <div className="menu text-white">
          <button className="border border-zinc-300 bg-black mr-8 px-1 py-2 text-xl">
            <i className="bx bx-world"></i> English <i className="bx bxs-down-arrow"></i>
          </button>
          <button className="bg-red-600 px-5 py-3 rounded-md">Sign in</button>
        </div>
      </section>
      <section className="text-center content flex items-center flex-col justify-center text-white pt-40">
        <h1 className="text-7xl font-extrabold">
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h3 className="text-3xl py-7">Watch anywhere. Cancel anytime.</h3>
        <p className="text-2xl py-5">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="signup pt-6 pb-40">
          <form action="">
            <input
              className="text-left text-xl py-8 pl-5 pr-96 mr-1 focus:outline-none text-black"
              type="email"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="bg-red-600 text-white text-4xl py-7 font-medium px-16 mt-2 relative top-1"
            >
              Get Started! <i className="bx bx-chevron-right"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
    // show three done
  );
}
