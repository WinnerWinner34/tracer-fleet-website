import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  const roles = [
    {
      title: "Fleet Managers",
      subtitle: "Eliminate surprises and boost fleet productivity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Professional fleet manager analyzing telematics data",
      benefits: [
        "Vehicles are paired with accompanying trailers and assets",
        "Confirm cargo is delivered on time",
        "Quickly spot ways you can operate more efficiently",
        "Prevent theft and waste with visibility across your fleet"
      ]
    },
    {
      title: "Drivers",
      subtitle: "Optimize your time on the road",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Professional truck driver using advanced telematics technology",
      benefits: [
        "Vehicles, trailers, and drivers automatically paired",
        "Consistently get the job done—and have a record of it",
        "Hear about new loads available for transport",
        "Get support from dispatch when delivery is at risk"
      ]
    },
    {
      title: "Dispatchers",
      subtitle: "See everything with fleet-wide visibility",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Professional dispatcher coordinating fleet operations from command center",
      benefits: [
        "Know where vehicles are at all times",
        "Stay up to date on drivers' ETAs and potential delays",
        "Make sure drivers are transporting the right cargo",
        "See which vehicles are ready to pick up new loads"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-tracer-dark mb-4">
            Empower your company with Tracer's vehicle telematics system
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {roles.map((role, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img 
                    src={role.image}
                    alt={role.alt}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-tracer-dark mb-4 text-center">{role.title}</h3>
                <h4 className="text-lg font-semibold text-tracer-blue mb-4">{role.subtitle}</h4>
                <ul className="space-y-3 text-gray-600">
                  {role.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <Check className="text-tracer-blue mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
