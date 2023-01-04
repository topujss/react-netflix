export default function Faq() {
  return (
    <>
      <section className="text-center content flex items-center flex-col justify-center py-24 bg-black text-white border-y-8 border-neutral-600">
        <h1 className="text-6xl font-semibold">Frequently Asked Questions</h1>

        <div className="accordion cursor-pointer bg-neutral-700 mt-10 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">What is Netflix?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>
        <div className="accordion cursor-pointer bg-neutral-700 mt-5 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">How much does Netflix cost?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>
        <div className="accordion cursor-pointer bg-neutral-700 mt-5 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">What’s different on Basic with ads?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>
        <div className="accordion cursor-pointer bg-neutral-700 mt-5 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">Where can I watch?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>
        <div className="accordion cursor-pointer bg-neutral-700 mt-5 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">How do I cancel?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>
        <div className="accordion cursor-pointer bg-neutral-700 mt-5 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">What can I watch on Netflix?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>
        <div className="accordion cursor-pointer bg-neutral-700 mt-5 flex w-1/2 justify-between py-5 px-8">
          <h1 className="text-3xl">Is Netflix good for kids?</h1>
          <span>
            <i className="text-4xl bx bx-plus"></i>
          </span>
        </div>

        <p className="text-2xl pt-10">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="signup ">
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
    </>
  );
}
