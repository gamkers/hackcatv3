
import { useEffect, useRef, useState } from "react";
import { 
  Bluetooth, 
  Radio, 
  Waves, 
  Gamepad2, 
  Usb, 
  Globe, 
  Wifi
} from "lucide-react";

const FeatureHighlights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // When 70% of the slide is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.split('-')[1]);
          setActiveFeatureIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all feature slides
    const features = document.querySelectorAll('.feature-slide');
    features.forEach(feature => {
      observer.observe(feature);
    });
    
    return () => {
      features.forEach(feature => {
        observer.unobserve(feature);
      });
    };
  }, []);

  const features = [
    {
      icon: <Bluetooth className="h-12 w-12" />,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      title: "Bluetooth Rubber Ducky",
      description: "Execute advanced keystroke injection wirelessly using Bluetooth. Carry out stealthy BadUSB-style attacks without ever plugging in."
    },
    {
      icon: <Radio className="h-12 w-12" />,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500",
      title: "IR Blaster",
      description: "Clone, emit, and replay IR signals to simulate and test remote-based control systems. Essential for IR vulnerability testing."
    },
    {
      icon: <Waves className="h-12 w-12" />,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500",
      title: "SubGHz Transmitter & Cloning",
      description: "Perform RF signal cloning and frequency emissions across bands like 433MHz and more. Perfect for smart device pentesting."
    },
    {
      icon: <Gamepad2 className="h-12 w-12" />,
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500",
      title: "Built-in Games",
      description: "Recharge between sessions with embedded mini-games. Designed for entertainment and stress relief during work hours."
    },
    {
      icon: <Usb className="h-12 w-12" />,
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-500",
      title: "BadUSB Add-on Support",
      description: "Integrate USB microcontrollers like Arduino Pro Micro for creating and running advanced payloads and custom attack scripts."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500",
      title: "Evil Portal",
      description: "Simulate real-world phishing scenarios with hosted Evil Portals. Collect credentials in a controlled, ethical environment."
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
      title: "Sour Apple Packet Monitor",
      description: "Monitor Wi-Fi packets live. Inspect traffic, capture packets, and analyze networks in real-time with built-in tools."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="whats-new" 
      className="relative bg-white overflow-hidden"
    >
      {/* Background grid pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern pointer-events-none"></div>
      
      <div className="container-custom">
        <div className="text-center mb-8 pt-16">
          <h2 className="headline mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              What's New in HACK_CAT V3
            </span>
          </h2>
          <p className="subheadline mx-auto">
            Discover the revolutionary features that make V3 our most advanced pentesting tool yet
          </p>
        </div>
        
        {/* Feature navigation dots */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
          {features.map((_, index) => (
            <a 
              key={`dot-${index}`}
              href={`#feature-${index}`}
              className={`w-2 h-2 rounded-full transition-all ${
                activeFeatureIndex === index 
                  ? "bg-[hsl(var(--cyber-green))] scale-150" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Navigate to feature ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Scroll snap container */}
        <div className="scroll-snap-container overflow-y-auto h-[calc(100vh-200px)] snap-y snap-mandatory">
          {features.map((feature, index) => (
            <div 
              id={`feature-${index}`}
              key={index}
              className="feature-slide h-[calc(100vh-200px)] snap-start flex items-center justify-center py-8"
            >
              <div className={`feature-card w-full flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 opacity-0 translate-y-10 transition-all duration-700 ${
                activeFeatureIndex === index ? 'opacity-100 translate-y-0' : ''
              }`}>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className={`feature-icon p-5 rounded-xl inline-flex ${feature.iconBg} ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {feature.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {feature.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="feature-visual rounded-xl bg-gray-50 border border-gray-100 shadow-sm aspect-square flex items-center justify-center transform transition-transform duration-700 hover:rotate-3 hover:scale-105">
                    <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                      <div className={`absolute inset-0 ${feature.iconBg} opacity-30 rounded-full blur-3xl`}></div>
                      <div className={`${feature.iconColor} w-full h-full flex items-center justify-center`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
