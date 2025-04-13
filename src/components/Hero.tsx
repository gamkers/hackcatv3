
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Function to handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate the position relative to the center of the screen
      const xRotation = ((clientY - windowHeight / 2) / windowHeight) * 10; // -5 to 5 degrees
      const yRotation = ((clientX - windowWidth / 2) / windowWidth) * -10; // -5 to 5 degrees
      
      setMousePosition({ x: yRotation, y: xRotation });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to handle button click and redirect to the store
  const handleBuyNowClick = () => {
    window.open("https://store.hackgears.in/product/hack_cat-v3/", "_blank");
  };

  // Function to handle button click and redirect to Instagram
  const handleWatchDemoClick = () => {
    window.open("https://www.instagram.com/hackgears/", "_blank");
  };

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
            <Button 
              className="cta-button"
              onClick={handleBuyNowClick}
            >
              Buy Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              className="rounded-full px-7 py-6 border-2 hover:bg-gray-50 transition-all"
              onClick={handleWatchDemoClick}
            >
              Watch Demo <Instagram className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex -space-x-2">
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="Security professional 1" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" alt="Security professional 2" />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" alt="Security professional 3" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=100" alt="Security professional 4" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-muted-foreground">
              <span className="font-semibold text-black">500+</span> security professionals trust HACK_CAT
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-xl mx-auto aspect-square">
            <div className="absolute w-full h-full rounded-full bg-[hsl(var(--cyber-green)/0.05)] blur-3xl"></div>
            <div 
              ref={imageRef} 
              className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
              style={{ 
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <img 
                src="https://raw.githubusercontent.com/gamkers/hackcatv3/refs/heads/main/src/components/image1.png" 
                alt="HACK_CAT V3" 
                className="w-full h-full object-contain transform transition-transform duration-300 shadow-lg rounded-xl"
                style={{ transform: 'translateZ(20px)' }}
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