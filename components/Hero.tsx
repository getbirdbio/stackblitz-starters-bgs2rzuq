export default function Hero() {
  return (
    <div className="relative bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            Cannabis Delivered
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
            Shop thousands of cannabis products from the best brands, delivered right to your door.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}