export default function FeaturedProducts() {
  const products = [
    {
      name: 'Premium Flower',
      brand: 'Top Brand',
      price: 45,
      image: '🌿',
    },
    {
      name: 'Vape Cartridge',
      brand: 'Vapor Co',
      price: 35,
      image: '💨',
    },
    {
      name: 'Gummies',
      brand: 'Sweet Relief',
      price: 20,
      image: '🍬',
    },
    {
      name: 'Pre-roll Pack',
      brand: 'Roll Master',
      price: 30,
      image: '🚬',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="text-center text-4xl mb-4">{product.image}</div>
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.brand}</p>
                <p className="mt-2 text-lg font-bold">${product.price}</p>
                <button className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}