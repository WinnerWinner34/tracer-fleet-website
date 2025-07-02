export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Direct your fleet confidently with telematics at your fingertips
          </h2>
        </div>

        {/* Feature 1: Unify Data */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Unify data across your business</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tracer's integrated operations platform consolidates vehicle and asset data, videos, and more into one place, helping you make smarter decisions.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Advanced truck telematics control interface with multiple data streams" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Feature 2: Real-time Context */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-last">
            <h3 className="text-2xl font-bold text-black mb-4">Get real-time context</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tracer links each vehicle's video and telematics data. You get a complete picture that includes location, fuel level, dash cam footage, and more.
            </p>
          </div>
          <div className="lg:order-first">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Fleet management dashboard showing real-time vehicle tracking and analytics" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Feature 3: Simplify Workflows */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Simplify workflows</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every time you switch between platforms, you run the risk of making mistakes or missing key details. Instead, see all telematics signals in one interface.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Streamlined telematics workflow interface displaying comprehensive fleet data" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
