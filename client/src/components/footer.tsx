import tracerLogo from "@assets/tracer fleet color same height_1751478084474.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="resources" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={tracerLogo} 
                alt="Tracer Fleet Logo" 
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Unlock the potential of your operations with advanced fleet telematics solutions that improve visibility, automate operations, and identify risks.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Fleet Tracking
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Driver Monitoring
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Fuel Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Compliance
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('resources')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-gray-100 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tracer Fleet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
