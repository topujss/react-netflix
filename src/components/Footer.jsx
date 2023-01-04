export default function Footer() {
  return (
    <>
      <footer className="py-16 bg-black text-neutral-500">
        <section className="max-w-screen-lg mx-auto">
          <h4 className="font-light mb-7 text-xl">
            Questions? Call
            <a className="pl-1 hover:underline" href="#">
              1-844-505-2993
            </a>
          </h4>
          <section className="flex justify-between text-xl">
            <ul className="w-1/5">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li className="py-3">
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li className="py-3">
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
            <ul className="w-1/4">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li className="py-3">
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li className="py-3">
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Do Not Sell or Share My Personal Information</a>
              </li>
            </ul>
            <ul className="w-1/5">
              <li>
                <a href="#">Account</a>
              </li>
              <li className="py-3">
                <a href="#">Redeem Gift Cards</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li className="pt-3">
                <a href="#">Speed Test</a>
              </li>
            </ul>
            <ul className="w-1/5">
              <li>
                <a href="#">Media Center</a>
              </li>
              <li className="py-3">
                <a href="#">Buy Gift Cards</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
              <li className="pt-3">
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
          </section>
          <button className="mt-10 border border-zinc-300 bg-black mr-8 px-1 py-2 text-xl">
            <i className="bx bx-world"></i> English <i className="bx bxs-down-arrow"></i>
          </button>
        </section>
      </footer>
    </>
  );
}
