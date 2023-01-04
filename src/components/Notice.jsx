export default function Notice() {
  return (
    // notice start
    <div className="notice flex justify-center py-8 items-center">
      <span className="bg-red-700 uppercase font-semibold text-white p-1 px-4 rounded-3xl">new!</span>
      <p className="text-2xl mx-7">
        Plans now start at <strong className="font-extrabold text-3xl">$6.99</strong>.
      </p>
      <a href="#" className="text-blue-500 flex items-center text-2xl font-bold">
        Learn More <i className="bx bx-chevron-right "></i>
      </a>
    </div>
    // notice ends
  );
}
