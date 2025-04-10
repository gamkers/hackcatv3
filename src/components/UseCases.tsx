
import { Badge } from "@/components/ui/badge";
import { 
  Network, GraduationCap, 
  ShieldAlert, Gamepad 
} from "lucide-react";

const UseCases = () => {
  const applications = [
    {
      icon: <Network className="h-10 w-10 mb-4" />,
      title: "Wireless Network Testing",
      description: "Identify vulnerabilities in Wi-Fi networks, perform packet analysis, and test network security measures in corporate environments.",
      imagePath: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Pentest", "Wireless", "Security"]
    },
    {
      icon: <GraduationCap className="h-10 w-10 mb-4" />,
      title: "Educational Demonstrations",
      description: "Perfect for cybersecurity courses and workshops, providing hands-on experience with ethical hacking principles and techniques.",
      imagePath: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      tags: ["Education", "Training", "Workshops"]
    },
    {
      icon: <ShieldAlert className="h-10 w-10 mb-4" />,
      title: "Pentesting & Exploitation",
      description: "Professional security assessments to identify and address vulnerabilities before they can be exploited by malicious actors.",
      imagePath: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["Professional", "Security", "Assessment"]
    },
    {
      icon: <Gamepad className="h-10 w-10 mb-4" />,
      title: "Hobby & Entertainment",
      description: "Extend functionality with DIY expansions and enjoy built-in games during your downtime between security operations.",
      imagePath: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      tags: ["DIY", "Customizable", "Entertainment"]
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases / Applications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From professional security assessments to educational tools, HACK_CAT V3 adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {applications.map((app, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/2 lg:w-5/12 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={app.imagePath} 
                  alt={app.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="md:w-1/2 lg:w-7/12 flex flex-col justify-center">
                <div className="mb-2 text-[hsl(var(--cyber-green))]">{app.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-gray-100 hover:bg-gray-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
