export default function HowItWorks() {
  const steps = [
    {
      title: 'Browse',
      description: 'Shop thousands of products from top brands',
      icon: '🔍',
    },
    {
      title: 'Order',
      description: 'Select your products and checkout securely',
      icon: '🛒',
    },
    {
      title: 'Deliver',
      description: 'Get your order delivered right to your door',
      icon: '🚚',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}