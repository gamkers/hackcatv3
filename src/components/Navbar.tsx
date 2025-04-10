
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="logo">
          <a href="/" className="font-bold text-xl tracking-tight">HACK_CAT V3</a>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10">
            <li>
              <a href="#" className="font-medium hover:text-[hsl(var(--cyber-green))] transition-colors">Home</a>
            </li>
            <li>
              <a href="#features" className="font-medium hover:text-[hsl(var(--cyber-green))] transition-colors">Features</a>
            </li>
            <li>
              <a href="#specs" className="font-medium hover:text-[hsl(var(--cyber-green))] transition-colors">Specs</a>
            </li>
          </ul>
        </nav>
        
        <div className="cta">
          <Button className="cta-button">
            Get Yours <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
