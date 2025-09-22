import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ECGMonitor from "../Assets/ECG Monitor.jpg"
import EaseMilker from "../Assets/EaseMilker.jpg"
import CountingSystem from "../Assets/Counting System.jpg"

const Projects = () => {
  const projects = [
    {
      title: "IoT Based ECG Monitoring and Pulse Rate Monitoring System",
      description: "Developed a prototype for IoT-Based ECG Monitoring and Pulse Rate Monitoring System aimed at improving real-time health monitoring and accessibility. Played a key role in the team by providing insights and guidance for problem-solving and implementation. I was in a team of 4 Engineering students of my department. Displayed my project in “Institution Innovation Hackathon” at KSR College of Engineering.",
      tech: ["IoT", "C Programming"],
      category: "Internet of Things",
      image: ECGMonitor,
      link: "https://github.com/Kavinprabhu2005/IOT-based-ECG-Monitor",
      featured: true
    },
    {
      title: "EaseMilker",
      description: "The EaseMilker system is an affordable, fully automated milking solution designed specifically for small-scale dairy farmers. It integrates sensor-based milk flow control using a flow sensor to monitor real-time milking activity and automatically stop the process when milk flow ceases. A load cell–based weighing system ensures precise detection of milk quantity, triggering an auto shutoff mechanism to prevent overflow and spillage.",
      tech: ["C Programming"],
      category: "Hardware and IoT Product",
      image: EaseMilker,
      link: "#",
      featured: true
    },
    {
      title: "Intelligent People and Vehicle Counting System for Secretariat.",
      description: "This project is a smart solution designed to provide accurate, real-time data on people and vehicle traffic within a secretariat. By utilizing various sensors, cameras, and algorithms, the system can track who and what is entering and exiting the building. The goal is to optimize facility usage, improve safety, and increase operational efficiency.",
      tech: ["IoT Devices & Cameras", "IBM Watson IoT Platform", "Node-RED", "Web UI","OpenCV"],
      category: "Full Stack",
      image: CountingSystem,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent h-16">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning full-stack development, frontend applications,
            and innovative solutions that demonstrate my technical expertise and creativity.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth group">
                {/* Project Image */}
                <div className="h-48 relative bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Link to={project.link}>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      View Project <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>

            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth group">
                {/* <div className={`h-32 ${project.image} relative`}> */}
                <div className="h-32 relative bg-cover bg-center" style={{backgroundImage: `url(${project.image})`}}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-primary text-primary text-xs">
                      {project.category}
                    </Badge>
                    {/* <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="hover:text-primary p-1">
                        <Github size={14} />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-primary p-1">
                        <ExternalLink size={14} />
                      </Button>
                    </div> */}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
                    Coming Soon <ArrowRight className="ml-1" size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
