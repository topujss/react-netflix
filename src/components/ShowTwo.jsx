import tv1 from '../img/device-pile.png';
import tv2 from '../img/bg-nf.jpg';

export default function ShowOne() {
  return (
    <>
      <section className=" bg-black text-white py-24 ">
        <div className="flex max-w-screen-xl mx-auto justify-around items-center">
          <div className="relative z-20  overflow-clip">
            <img src={tv1} width="500" alt="" />
            <div className="inner">
              <img className="absolute top-10 left-28 w-4/6 pr-3 -z-20" src={tv2} alt="" />
            </div>
          </div>
          <div className="w-1/2 pr-20">
            <h1 className="text-7xl font-extrabold mb-7">Watch everywhere.</h1>
            <p className="text-4xl">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
