
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, ReceiptText } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-r from-gray-900 to-slate-800 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Future of Pentesting?</h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Pre-order your HACK_CAT V3 today and be among the first to elevate your security testing capabilities
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Button className="cta-button text-lg px-10 py-7 rounded-full">
            Get Yours Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-transparent text-white hover:bg-white/10 border-2 border-white/50 text-lg px-10 py-7 rounded-full"
          >
            See Features
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 rounded-full p-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-[hsl(var(--cyber-green))]" />
            </div>
            <h3 className="font-medium">Secure Checkout</h3>
            <p className="text-sm text-gray-400">SSL encrypted payment</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 rounded-full p-3 mb-4">
              <ReceiptText className="h-6 w-6 text-[hsl(var(--cyber-green))]" />
            </div>
            <h3 className="font-medium">30-Day Money Back</h3>
            <p className="text-sm text-gray-400">Satisfaction guaranteed</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 rounded-full p-3 mb-4">
              <Truck className="h-6 w-6 text-[hsl(var(--cyber-green))]" />
            </div>
            <h3 className="font-medium">Shipping ETA</h3>
            <p className="text-sm text-gray-400">Q3 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
