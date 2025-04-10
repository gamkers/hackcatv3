
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-0"></div>
      
      {/* Grid pattern for subtlety */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0zNiAzNGgxOHYyNkgzNnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNDUgNDJoMXYxMGgtMXoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNOCAzNGgxOHYyNkg4eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNSA0MmgxdjEwaC0xeiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0zNiA2aDE4djI2SDM2eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00NSAxMmgxdjEwaC0xeiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik04IDZoMTh2MjZIOHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTUgMTJoMXYxMGgtMXoiLz48L2c+PC9zdmc+')] z-0"></div>
      
      <div className="container-custom mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 z-10 relative">
        <div className="flex flex-col justify-center space-y-10 fadeIn">
          <div>
            <h1 className="headline mb-6">
              HACK_CAT V3
              <br />
              <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">The Next Evolution in Multi-Pentesting Tools</span>
            </h1>
            
            <p className="subheadline mt-6">
              Take wireless security testing to the next level with a sleek, compact, and powerful all-in-one pentesting toolkit.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="cta-button">
              Buy Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            
            <Button variant="outline" className="rounded-full px-7 py-6 border-2 hover:bg-gray-50 transition-all">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <p className="text-muted-foreground">
              <span className="font-semibold text-black">500+</span> security professionals trust HACK_CAT
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-xl mx-auto aspect-square">
            <div className="absolute w-full h-full rounded-full bg-[hsl(var(--cyber-green)/0.05)] blur-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src="/src/components/image1.png" 
                alt="HACK_CAT V3" 
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300 rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll to discover</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-transparent to-gray-400"></div>
      </div>
    </section>
  );
};

export default Hero;

