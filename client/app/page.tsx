export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Carry-On Car Rental
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your trusted partner for affordable and reliable car rentals.
            Explore our fleet and find the perfect vehicle for your journey.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Browse Cars
            </button>
            <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Wide Selection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose from economy to luxury vehicles
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Affordable Rates
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Competitive pricing with no hidden fees
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              24/7 Support
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Round-the-clock customer assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
