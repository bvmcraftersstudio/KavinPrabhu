import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Stethoscope, Shield } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Stethoscope className="text-accent" size={24} />
              {/* <Shield className="text-secondary" size={24} /> */}
            </div>
            <NavLink to="/" className="text-2xl font-bold bg-gradient-medical bg-clip-text text-transparent">
              KAVIN PRABHU
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-military hover:text-primary font-medium ${
                    isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-muted-foreground"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-military hover:text-primary font-medium ${
                    isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-muted-foreground"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `transition-military hover:text-primary font-medium ${
                    isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-muted-foreground"
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-military hover:text-primary font-medium ${
                    isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-muted-foreground"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;