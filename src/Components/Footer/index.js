import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Hours Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-yellow-400">Hours:</h3>
          <p>Lunch: Tuesday - Sunday 10:15am to 2:15pm</p>
          <p>Dinner: Tuesday - Saturday 4:30pm to 9:30pm</p>
          <p>Dinner: Sunday 4:30pm to 8:45pm</p>
          <p className="text-red-400">Monday: Closed</p>
        </div>

        {/* Contact Section */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-yellow-400">Contact:</h3>
          <p>
            Phone:{" "}
            <a href="tel:9204991414" className="text-blue-400 hover:underline">
              920-499-1414
            </a>
          </p>
          <h3 className="text-xl font-bold text-yellow-400">Address:</h3>
          <p>2611 Holmgren Way, Green Bay, WI 54304</p>
          <a
            href="https://www.facebook.com/India-Bhavan-1501460733481466/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2"
          >
            <FaFacebook className="text-blue-600 text-3xl hover:text-blue-400 transition duration-300" />
          </a>
        </div>

        {/* Credits Section */}
        <div className="space-y-2">
          <p>© {currentYear} India Bhavan. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="privacy.html"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="terms.html"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Terms of Use
            </a>
            <a
              href="sitemap.html"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
