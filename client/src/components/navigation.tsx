import { useState } from "react";
import { Menu, X, Navigation as NavigationIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav className="sticky top-0 z-50 bg-background shadow-sm border-b border-tracer-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-tracer-blue rounded-lg flex items-center justify-center mr-3">
                <NavigationIcon className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-tracer-dark">Tracer Fleet</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-tracer-dark hover:text-tracer-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-tracer-dark hover:text-tracer-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-tracer-dark hover:text-tracer-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('resources')}
                className="text-tracer-dark hover:text-tracer-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-tracer-blue text-white hover:bg-blue-600"
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
              className="text-tracer-dark hover:text-tracer-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-tracer-gray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-tracer-dark hover:text-tracer-blue transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-tracer-dark hover:text-tracer-blue transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-tracer-dark hover:text-tracer-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-tracer-dark hover:text-tracer-blue transition-colors"
            >
              Resources
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-tracer-blue text-white mt-4"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
