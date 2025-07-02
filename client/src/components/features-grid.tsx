import { MapPin, Fuel, Shield, Wrench, ClipboardCheck, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesGrid() {
  const features = [
    {
      icon: MapPin,
      title: "GPS fleet tracking",
      description: "Be confident that cargo arrives on time and at the right place with automated vehicle-trailer pairing, traffic and weather overlays, and more."
    },
    {
      icon: Fuel,
      title: "Better fuel and EV management",
      description: "Get alerted about discrepancies between fuel purchases, location, and fuel level. You can also manage EV charge levels and battery health."
    },
    {
      icon: Shield,
      title: "Driver behavior monitoring",
      description: "Analyze integrated camera and telematics data and use automated coaching workflows to encourage safe and efficient driving."
    },
    {
      icon: Wrench,
      title: "Comprehensive vehicle diagnostics",
      description: "Monitor engine health, vehicle performance, and preventative maintenance to keep your fleet running smoothly."
    },
    {
      icon: ClipboardCheck,
      title: "Easier compliance reporting",
      description: "Telematics data and CSA score information and insights help you see what you need to do to stay compliant."
    },
    {
      icon: Headphones,
      title: "Enhanced customer service",
      description: "Get high-fidelity ETAs, know which drivers and vehicles can take loads, and stay up to date on fuel and charge levels at all times."
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Don't just track. Make your fleet data work for you.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tracer makes it easier to understand data, identify problem areas, and resolve issues.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
