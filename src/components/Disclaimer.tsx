
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Shield className="h-8 w-8 text-[hsl(var(--cyber-green))]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Disclaimer & Legal Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information about the proper and legal use of HACK_CAT V3
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-md border-l-4 border-l-[hsl(var(--cyber-green))]">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
              <p className="text-sm">
                By purchasing or using the HACK_CAT V3 device, you acknowledge and agree to the following terms and conditions.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Authorized Providers</AccordionTrigger>
                <AccordionContent>
                  HACK_CAT V3 is provided by Hypesec Infotech LLP & Hack Gears. Any unauthorized reproduction or distribution is strictly prohibited.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Intended Use</AccordionTrigger>
                <AccordionContent>
                  This device is designed and intended for educational and research purposes only. It should be used in controlled environments with proper authorization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Legal Authorization</AccordionTrigger>
                <AccordionContent>
                  Users must obtain legal authorization before conducting any security testing on networks or systems. Testing without explicit permission may violate local, state, or federal laws.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Limited Liability</AccordionTrigger>
                <AccordionContent>
                  The device is provided "as is" without warranty of any kind. The manufacturers and distributors assume no liability for any misuse or damages resulting from the use of this device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Terms Acceptance</AccordionTrigger>
                <AccordionContent>
                  Acceptance of these terms is mandatory upon purchase. By using HACK_CAT V3, you confirm your agreement to abide by all applicable laws and regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Disclaimer;
