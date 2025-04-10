
import { 
  Wifi, Bluetooth, Thermometer, Gamepad, 
  IdCard, CloudSun, Cpu, Usb 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const KeyFeatures = () => {
  const features = [
    {
      icon: <Wifi className="h-10 w-10 mb-2" />,
      title: "Wi-Fi Pentesting",
      description: "Comprehensive wireless network assessment tools with multiple attack vectors."
    },
    {
      icon: <Bluetooth className="h-10 w-10 mb-2" />,
      title: "Bluetooth/BLE Exploits",
      description: "Target and analyze Bluetooth Low Energy devices with specialized attack protocols."
    },
    {
      icon: <Thermometer className="h-10 w-10 mb-2" />,
      title: "Infrared Testing",
      description: "Built-in IR capabilities for testing and controlling IR-based devices and systems."
    },
    {
      icon: <Gamepad className="h-10 w-10 mb-2" />,
      title: "Games & Scripts",
      description: "Run custom scripts and even retro games during your downtime between tests."
    },
    {
      icon: <IdCard className="h-10 w-10 mb-2" />,
      title: "SD Card Storage",
      description: "Expandable storage for logs, captured data, and additional attack payloads."
    },
    {
      icon: <CloudSun className="h-10 w-10 mb-2" />,
      title: "OTA Updates",
      description: "Keep your device current with over-the-air firmware and feature updates."
    },
    {
      icon: <Cpu className="h-10 w-10 mb-2" />,
      title: "Expandable GPIO",
      description: "Connect additional hardware and sensors through multi-purpose I/O pins."
    },
    {
      icon: <Usb className="h-10 w-10 mb-2" />,
      title: "Versatile Power",
      description: "USB-powered with integrated battery support for field operations."
    }
  ];

  return (
    <section id="key-features" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed for professional security testing and educational purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border hover:border-[hsl(var(--cyber-green))] transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <CardHeader className="pb-2">
                <div className="text-[hsl(var(--cyber-green))]">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
