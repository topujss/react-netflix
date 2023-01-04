import tv1 from '../img/tv1.png';
import tv2 from '../img/bg-nf.jpg';

export default function ShowOne() {
  return (
    <>
      <section className=" bg-black text-white py-24 border-y-8 border-slate-300">
        <div className="flex max-w-screen-xl mx-auto justify-around items-center">
          <div className="w-1/2 pr-20">
            <h1 className="text-7xl font-extrabold mb-7">Enjoy on your TV.</h1>
            <p className="text-4xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className="relative z-20 ">
            <img src={tv1} width="500" alt="" />
            <div className="inner">
              <img className="absolute top-5 -z-20" src={tv2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
