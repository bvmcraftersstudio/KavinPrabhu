import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Lightbulb, Target, Microchip } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ECGMonitor from "../Assets/ECG Monitor.jpg"
import EaseMilker from "../Assets/EaseMilker.jpg"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent h-16">
              PCB Designer & App Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Crafting digital experiences with passion, precision, and cutting-edge technology.
              Transforming ideas into powerful web applications and PCB Design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary-muted transition-smooth" onClick={() => navigate('/about')}>
                About Me
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth" onClick={() => navigate('/contact')}>
                Get In Touch
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth">
              <Microchip className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-2">2+</h3>
              <p className="text-muted-foreground font-semibold">Projects Completed</p>
            </Card>
            <Card className="p-8 text-center bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth">
              <Target className="mx-auto mb-4 text-secondary" size={48} />
              <h3 className="text-2xl font-bold mb-2">8+</h3>
              <p className="text-muted-foreground font-semibold">Months Experience</p>
            </Card>
            <Card className="p-8 text-center bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth">
              <Lightbulb className="mx-auto mb-4 text-accent" size={48} />
              <h3 className="text-2xl font-bold mb-2">7+</h3>
              <p className="text-muted-foreground font-semibold">Technologies Learning</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth group">
                <div className="h-48 bg-gradient-primary">
                  <img
                    src={ECGMonitor}
                    alt="Leaf"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    IoT Based ECG Monitoring and Pulse Rate Monitoring System
                  </h3>
                  <p className="text-muted-foreground mb-4">IoT Based, C Programming</p>
                  <Link to='https://github.com/Kavinprabhu2005/IOT-based-ECG-Monitor'>
                    <Button variant="outline" size="sm">
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="overflow-hidden bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth group">
                <div className="h-48 bg-gradient-primary">
                  <img
                    src={EaseMilker}
                    alt="Leaf"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">Easemilker</h3>
                  <p className="text-muted-foreground mb-4">C Programing</p>
                  <Button variant="outline" size="sm">
                    Comming Soon <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link to="/projects">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;