import tv1 from '../img/mobile.jpg';
import tv2 from '../img/boxshot.png';

export default function ShowFour() {
  return (
    <>
      <section className=" bg-black text-white py-24 ">
        <div className="flex max-w-screen-xl mx-auto justify-around items-center">
          <div className="relative -z-5  overflow-clip">
            <img src={tv1} width="500" alt="" />
            <div className="border bg-black py-3 border-slate-200 absolute bottom-10 left-28 w-4/6 z-20 flex flex-row justify-around items-center rounded-xl">
              <img className="w-20" src={tv2} alt="" />
              <div className="pr-5">
                <h5 className="font-semibold">Stranger Things</h5>
                <p className="text-sky-600">Downloading...</p>
              </div>
              <i class="text-3xl bx bxs-download cursor-wait"></i>
            </div>
          </div>
          <div className="w-1/2 pr-20">
            <h1 className="text-7xl font-bold mb-7">Download your shows to watch offline.</h1>
            <p className="text-4xl">Available on all plans except Basic with ads.</p>
          </div>
        </div>
      </section>
    </>
  );
}
