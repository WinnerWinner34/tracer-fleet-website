import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import tracerLogo from "@assets/tracer fleet color same height_1751478084474.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={tracerLogo} 
                alt="Tracer Fleet Logo" 
                className="h-12 w-auto mr-3"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Savings Calculator
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact Us
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black hover:bg-gray-200"
              >
                Order Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Savings Calculator
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-gray-300 transition-colors"
            >
              Contact Us
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-white text-black mt-4"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
