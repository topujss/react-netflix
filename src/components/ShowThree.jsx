import kid from '../img/kid.png';

export default function ShowThree() {
  return (
    <>
      <section className=" bg-black text-white py-20 border-y-8 border-slate-300">
        <div className="flex max-w-screen-xl mx-auto justify-around items-center">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold mb-7">Create profiles for kids.</h1>
            <p className="text-4xl pr-28">
              Send kids on adventures with their favorite characters in a space made just for them—free with your
              membership.
            </p>
          </div>
          <div className="">
            <img src={kid} width="500" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
