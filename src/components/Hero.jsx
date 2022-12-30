import bgImg from '../img/bg-nf.jpg';

export default function Hero() {
  return (
    <div className="hero relative bg-no-repeat bg-top px-28" style={{ background: `url(${bgImg})` }}>
      <section className="top flex justify-between py-14">
        <div className="logo">
          <img className="w-56" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        </div>
        <div className="menu text-white">
          <button className="border-2 border-cyan-600">
            <i className="bx bx-world"></i> English
          </button>
          <button className="bg-red-600 px-5 py-2">Sign in</button>
        </div>
      </section>
      <section className="text-center content flex items-center flex-col justify-center text-white ">
        <h1 className="text-7xl font-extrabold">
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <h3 className="text-3xl py-7">Watch anywhere. Cancel anytime.</h3>
        <p className="text-2xl py-5">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="signup">
          <form action="">
            <input type="email" placeholder="Email address" />
            <button type="submit">Get Started!</button>
          </form>
        </div>
      </section>
    </div>
  );
}
