
import { Wifi, Bluetooth, Package, Battery, Cpu, Wrench, Shield, Radio, Antenna } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductOverview = () => {
  const features = [
    {
      icon: <Wifi className="h-10 w-10 mb-4" />,
      title: "All-in-One Testing",
      description: "Wi-Fi, Bluetooth, IR, and SubGHz capabilities in one device for comprehensive wireless testing."
    },
    {
      icon: <Package className="h-10 w-10 mb-4" />,
      title: "Modular Add-ons",
      description: "USB, GPIO, and SD card ready for unlimited expansion and customization options."
    },
    {
      icon: <Cpu className="h-10 w-10 mb-4" />,
      title: "Powerful & Portable",
      description: "Powered by ESP32, built for the field with long-lasting battery life and compact design."
    },
    {
      icon: <Shield className="h-10 w-10 mb-4" />,
      title: "Advanced Security Suite",
      description: "Pre-loaded with specialized security tools for immediate deployment in various testing scenarios."
    },
    {
      icon: <Radio className="h-10 w-10 mb-4" />,
      title: "Multi-Protocol Support",
      description: "Compatible with a wide range of wireless protocols for maximum testing flexibility."
    },
    {
      icon: <Antenna className="h-10 w-10 mb-4" />,
      title: "Enhanced Range",
      description: "High-gain antennas and signal amplifiers for extended operational range during testing."
    }
  ];

  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(intervalId);
      api.off("select");
    };
  }, [api]);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is HACK_CAT V3?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            The HACK_CAT V3 is the ultimate multi-functional pentesting tool, taking wireless security testing to the next level. Designed for cybersecurity professionals and enthusiasts, this compact device brings together advanced tools for Wi-Fi, Bluetooth, Infrared (IR), and SubGHz pentesting, along with several other features to empower your security exploration.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're conducting authorized security assessments, researching vulnerabilities, or learning about wireless security, the HACK_CAT V3 provides the capabilities you need in a single, portable package—eliminating the need for multiple specialized devices.
          </p>
        </div>

        <div className="mb-12">
          <Carousel 
            setApi={setApi}
            className="w-full" 
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
          >
            <CarouselContent className="py-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <Card 
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <CardHeader className="pb-2 flex flex-col items-center">
                      <div className="text-[hsl(var(--cyber-green))]">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-4">
            {features.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide % features.length ? "bg-[hsl(var(--cyber-green))]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
