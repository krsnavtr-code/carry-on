import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Carry-On Car Rental</h3>
            <p className="text-gray-400">
              Your trusted partner for affordable and reliable car rentals.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cars"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/daily"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Daily Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/services/weekly"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Weekly Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/services/monthly"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Monthly Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/services/airport"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Airport Pickup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Car Rental Street</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@carryoncarrental.com</li>
              <li>🕐 Mon-Sun: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Carry-On Car Rental. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
