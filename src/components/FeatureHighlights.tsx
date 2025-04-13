
import { useEffect, useRef, useState } from "react";

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
      image: "https://miro.medium.com/v2/resize:fit:1400/0*q8HEbqOhDU3eFcY8.jpg",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
      title: "Bluetooth Rubber Ducky",
      description: "Execute advanced keystroke injection wirelessly using Bluetooth. Carry out stealthy BadUSB-style attacks without ever plugging in."
    },
    {
      image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/07/TV-remote-IR-blaster.jpg",
      bgColor: "bg-red-500/10",
      textColor: "text-red-500",
      title: "IR Blaster",
      description: "Clone, emit, and replay IR signals to simulate and test remote-based control systems. Essential for IR vulnerability testing."
    },
    {
      image: "https://www.locksmithjournal.co.uk/wp-content/uploads/2017/01/AdobeStock_70772379-450x300.jpeg",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-500",
      title: "SubGHz Transmitter & Cloning",
      description: "Perform RF signal cloning and frequency emissions across bands like 433MHz and more. Perfect for smart device pentesting."
    },
    {
      image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
      title: "Built-in Games",
      description: "Recharge between sessions with embedded mini-games. Designed for entertainment and stress relief during work hours."
    },
    {
      image: "https://www.einfochips.com/wp-content/uploads/2023/09/2_BLE_security_and_Privacy_for_IoT_Blog_Featured_Image-scaled-1.jpg",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-500",
      title: "Bluetooth/BLE Exploits",
      description: "Target BLE devices with specialized attack protocols. Capabilities include Bluetooth spam, 2.4GHz jamming, and Bluetooth remote testing."
    },
    {
      image: "https://lirp.cdn-website.com/35fcf6c5/dms3rep/multi/opt/Wireless+Penetration+Testing-1920w.png",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-500",
      title: "Wi-Fi Pentesting",
      description: "Full Wi-Fi security assessment suite with probe scanning, deauthentication attacks, beacon spam, deauth detection, war driving, and evil portal capabilities."
    },
    {
      image: "https://www.pcwelt.de/wp-content/uploads/2023/04/4350085_original.jpg",
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-500",
      title: "RFID/NFC Cloner",
      description: "Read, write, and clone RFID/NFC cards and tags across multiple frequencies. Perfect for access control system testing and card vulnerability assessment."
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
                  <div className={`p-1 rounded-xl inline-block ${feature.bgColor}`}>
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover" 
                      />
                    </div>
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
                    <div className="relative w-4/5 h-4/5 flex items-center justify-center overflow-hidden rounded-lg">
                      <div className={`absolute inset-0 ${feature.bgColor} opacity-30 blur-3xl`}></div>
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover z-10 rounded-lg shadow-lg"
                      />
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