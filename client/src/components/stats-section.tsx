import { Button } from "@/components/ui/button";

export default function StatsSection() {
  const stats = [
    { value: "48%", label: "less time spent on tracking vehicles and assets" },
    { value: "25%", label: "less time spent assigning unidentified trips" },
    { value: "$220k", label: "saved by reclaiming stolen and misplaced assets" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Save time and protect your assets
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              With Tracer providing you with full fleet visibility, maximum utilization, and increased productivity, you'll drive better results for your business.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100"
              size="lg"
            >
              Learn How
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
