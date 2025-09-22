import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, User, } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaMicrochip, FaJava, FaPython, FaCode, FaProjectDiagram, FaCogs } from "react-icons/fa";
import { SiArduino, SiEspressif, SiKicad, SiC } from "react-icons/si";

const About = () => {
  const skills = [
    {
      category: "Frontend Technology",
      items: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> }
      ]
    },
    {
      category: "Embedded Technology",
      items: [
        { name: "IoT Devices", icon: <FaMicrochip className="text-emerald-500" /> },
        { name: "Arduino", icon: <SiArduino className="text-blue-600" /> },
        { name: "ESP32", icon: <SiEspressif className="text-red-600" /> },
        { name: "STM32", icon: <FaMicrochip className="text-gray-500" /> }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "C Programming", icon: <SiC className="text-blue-700" /> }
      ]
    },
    {
      category: "PCB Design",
      items: [
        { name: "KiCAD", icon: <SiKicad className="text-teal-500" /> },
        { name: "Proteus", icon: <FaProjectDiagram className="text-purple-500" /> }
      ]
    },
    {
      category: "Chip Integration",
      items: [
        { name: "VLSI (Basics)", icon: <FaCogs className="text-indigo-500" /> }
      ]
    }
  ];

  const achievements = [
    { title: "Workshop(organized by UTHM)", year: "", description: "Two days international workshop on concatenation of preprocessed EEG Data for Brain wave analysis " },
    { title: "NCC B & C Certificate", year: "", description: "I am an NCC Cadet under 5(TN) Air Squadron (Tech), Salem. As a cadet, I follow the principles of discipline, unity, and leadership, actively participating in training, drills, and social service activities to build character and contribute to the nation. and Achieving my B and C certificate." },
    { title: "Elite Grade in NPTEL", year: "", description: "" },
    { title: "Attende 2 International workshop", year: "", description: "" },
    { title: "ICT Academy Course Completeion", year: "", description: "" }
  ];

  const education = [
    {
      degree: "BE - Biomedical Engineering",
      institution: "KSR Institute for Engineering and Technology",
      period: "2022 - 2026",
      grade: "CGPA: 7.54/10",
      description: "Specializing in PCB Design Design and App Development"
    },
    {
      degree: "Higher Secondary Certificate (HSC-II)",
      institution: "Swami Vivekanandar Matric Higher Secondary School",
      period: "2022",
      grade: "70%",
      // description: "Science Stream with Physics, Chemistry, Mathematics, and Biology"
    },
    {
      degree: "Secondary School Certificate (SSLC)",
      institution: "Swami Vivekanandar Matric Higher Secondary School",
      period: "2020",
      grade: "74%",
      // description: "All India Secondary School Examination with distinction"
    }
  ];

  const experience = [
    {
      title: "PCB Designer",
      company: "Azhizen Solutions",
      period: "March 25 - Present",
      description: "During the intern period I will learn about the PCB board design, Fabrication, Etching and Assembly. Now I can make own PCB board to design."
    },
    {
      title: "BioMedical Engineer",
      company: "Maruthi Medical Centre and Hospitals",
      period: "Apr 2023 - May 2023",
      description: "I learned about the Medical Equipment's in that hospital. What are the requirements are available in the hospital for the patients. I attend 10 days of internship in that hospital."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent text-center">
            About Me
          </h1>
          <Card className="p-8 bg-gradient-secondary border-border shadow-card">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <User className="text-primary" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">PCB Designer & App Developer</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  I am a passionate tech enthusiast exploring innovations in biology, engineering, and healthcare. With hands-on
                  experience from industry visits, international opportunities, and NCC leadership, I excel in sensor interfacing,
                  medical device design, and real-time problem-solving. Actively engaging in projects and internships, I strive to
                  advance healthcare technology.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or mentoring fellows in their journey.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Educational Qualifications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Educational Qualifications</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Skills */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <Card
                key={skillGroup.category}
                className="p-6 bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <Badge
                      key={item.name}
                      variant="outline"
                      className="mr-2 mb-2 gap-2 items-center bg-blue-50/15"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>



        {/* Experience & Internships */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Experience & Internships</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 bg-gradient-secondary border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto ">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-secondary border-border shadow-card hover:shadow-glow transition-smooth">
                <div className="p-4 bg-secondary/20 rounded-full w-fit mx-auto mb-4">
                  <Award className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-primary font-semibold mb-2">{achievement.year}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;