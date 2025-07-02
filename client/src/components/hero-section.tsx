import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-tracer-dark mb-6 leading-tight">
              See and fix problems faster with{" "}
              <span className="text-tracer-blue">Tracer Fleet Telematics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Help your fleet be safer, more efficient, and more profitable with telematics software that puts all your data in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-tracer-blue text-white hover:bg-blue-600"
                size="lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-tracer-blue text-tracer-blue hover:bg-tracer-blue hover:text-white"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="lg:order-last">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Fleet tracking dashboard interface showing real-time vehicle monitoring" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
