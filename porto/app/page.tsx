"use client"
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  ChevronRight, 
  Database, 
  Server, 
  Code, 
  Brain, 
  Terminal, 
  Cpu, 
  Award,
  ExternalLink
} from 'lucide-react';

// Define the new color palette (Red and Black)
const colors = {
  darkBg: 'bg-neutral-950', // Deep Black
  darkerBg: 'bg-neutral-900', // Dark Gray
  accentTeal: 'text-red-600', // Vibrant Red (Primary Accent)
  accentTealBg: 'bg-red-600',
  accentTealHex: '#dc2626', // Hex for shadows/borders
  accentTealHover: 'hover:bg-red-700',
  accentOrange: 'text-red-500', // Slightly lighter red for secondary accents
  accentOrangeBg: 'bg-red-500',
  accentOrangeHover: 'hover:bg-red-600',
  textLight: 'text-neutral-50', // White
  textMuted: 'text-neutral-400', // Gray text
  border: 'border-neutral-800', // Subtle dark gray border
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Awards', id: 'awards' },
    { name: 'Contact', id: 'contact' },
  ];

  // Data from CV
  const personalInfo = {
    name: "Derwin Rustanly",
    role: "Software Engineer & Backend Specialist",
    headline: "Building scalable distributed systems and intelligent software solutions. Specializing in Go, Python, and Microservices.",
    location: "Jakarta, Indonesia",
    email: "drustanly@gmail.com",
    github: "https://github.com/DrwnRstnly", 
    linkedin: "https://www.linkedin.com/in/derwin-rustanly/", 
    phone: "+62899-0055-508"
  };

  const experiences = [
    {
      company: "Terra Discover",
      role: "Software Engineer",
      period: "Jun 2025 - Sep 2025",
      location: "Jakarta, Indonesia",
      description: "Developed scalable automated solutions and internal tools.",
      points: [
        "Developed a hotel reservation chatbot using a custom automation engine.",
        "Built an internal admin site for chatbot monitoring using a React micro-frontend architecture with Go and Firebase backend.",
        "Designed Python RAG and QA pipelines for document querying using prompt chaining techniques."
      ],
      tech: ["Go", "React", "Firebase", "Python", "RAG"]
    },
    {
      company: "Wardaya College",
      role: "Full Stack Developer",
      period: "Jun 2024 - Sep 2024",
      location: "Jakarta, Indonesia",
      description: "Modernized educational platforms and data analytics tools.",
      points: [
        "Updated the CMS by migrating the backend to GraphQL and rebuilding the frontend with React.",
        "Created a dashboard for the Education Consultant Division for data centralization and real-time analytics utilizing React and Go."
      ],
      tech: ["React", "Go", "GraphQL", "CMS"]
    },
    {
      company: "Database Laboratory ITB",
      role: "Laboratory Assistant",
      period: "Jul 2024 - Present",
      location: "Bandung, Indonesia",
      description: "Mentoring students and managing course infrastructure.",
      points: [
        "Developed, distributed, and graded practical database assignments for over 150 students.",
        "Designed database schemas and project specifications for the course's practical component.",
        "Proctored examinations and maintained academic standards."
      ],
      tech: ["SQL", "Database Design", "Teaching"]
    },
    {
      company: "ITB Fair 2024",
      role: "Front-end Web Developer",
      period: "Jan 2024 - Mar 2024",
      location: "Bandung, Indonesia",
      description: "Developed the main event portal.",
      points: [
        "Built responsive web applications using Next.js, TypeScript, and Tailwind CSS.",
        "Led platform migration to Next.js to unify the codebase and enable server-side rendering."
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    }
  ];

  const skills = {
    languages: {
      icon: <Code className={`w-6 h-6 ${colors.accentTeal}`} />,
      title: "Languages",
      items: ["Python", "Go (Golang)", "TypeScript/JavaScript", "SQL", "Java", "C++", "PHP"]
    },
    backend: {
      icon: <Server className={`w-6 h-6 ${colors.accentTeal}`} />,
      title: "Backend & Cloud",
      items: ["Node.js", "GraphQL", "FastAPI", "gRPC", "Django", "Docker", "Kubernetes", "AWS", "Redis"]
    },
    ai: {
      icon: <Brain className={`w-6 h-6 ${colors.accentTeal}`} />,
      title: "AI & Machine Learning",
      items: ["PyTorch", "TensorFlow", "RAG", "LangChain", "HuggingFace", "Scikit-learn", "OpenCV"]
    },
    frontend: {
      icon: <Terminal className={`w-6 h-6 ${colors.accentTeal}`} />,
      title: "Frontend & Mobile",
      items: ["React", "Next.js", "Tailwind CSS", "React Native", "Jetpack Compose", "ShadCN"]
    }
  };

  return (
    <div className={`min-h-screen ${colors.darkBg} ${colors.textLight} font-sans selection:bg-red-900 selection:text-white`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${colors.darkBg}/95 backdrop-blur-md border-b ${colors.border} z-50`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`flex-shrink-0 font-bold text-xl ${colors.accentTeal} tracking-tighter`}>
              DR.
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className={`${
                      activeSection === link.id ? colors.accentTeal : colors.textMuted + ' hover:' + colors.textLight
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${colors.textMuted} hover:${colors.textLight} p-2`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${colors.darkerBg} border-b ${colors.border}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`${colors.textMuted} hover:${colors.textLight} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12">
        {/* Text Content */}
        <div className="space-y-6 max-w-2xl flex-1 order-2 md:order-1">
          <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.accentTealBg}/10 ${colors.accentTeal} text-sm font-medium border ${colors.accentTealBg}/20`}>
            Available for opportunities
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.textLight} tracking-tight`}>
            Derwin Rustanly
          </h1>
          <h2 className={`text-2xl md:text-3xl ${colors.textMuted} font-light`}>
            {personalInfo.headline}
          </h2>
          <p className={`${colors.textMuted} text-lg leading-relaxed max-w-2xl`}>
            Informatics Engineering student at ITB with a <span className={`${colors.accentTeal} font-semibold`}>3.99 GPA</span>. 
            Passionate about backend architecture, database design, and integrating AI into practical software solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href={`mailto:${personalInfo.email}`} className={`px-6 py-3 ${colors.accentTealBg} ${colors.accentTealHover} text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-red-500/20`}>
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a href="CV - Derwin Rustanly.pdf" 
              download="CV - Derwin Rustanly.pdf" className={`px-6 py-3 ${colors.darkerBg} hover:bg-neutral-800 ${colors.textLight} rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 border ${colors.border}`}>
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href={personalInfo.github} className={`${colors.textMuted} hover:${colors.textLight} transition-colors`}>
                <Github className="w-6 h-6" />
              </a>
              <a href={personalInfo.linkedin} className={`${colors.textMuted} hover:${colors.textLight} transition-colors`}>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
         <div className={`relative w-80 h-80 md:w-md md:h-112 rounded-full overflow-hidden border-4 ${colors.border} shadow-2xl shadow-red-500/20`}>
            <img 
              src="613.jpg" 
              alt="Derwin Rustanly" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${colors.darkerBg}/50`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold ${colors.textLight} mb-12 flex items-center gap-3`}>
            <Database className={`w-8 h-8 ${colors.accentTeal}`} />
            Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className={`hidden md:block absolute left-[50%] top-0 bottom-0 w-px ${colors.border} -translate-x-1/2`}></div>
                
                <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full ${colors.accentTealBg} border-4 ${colors.darkBg} -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10`}></div>
                  
                  {/* Content */}
                  <div className="md:w-[45%] mb-8 md:mb-0">
                    <div className={`bg-neutral-900 p-6 rounded-xl border ${colors.border} hover:border-red-500/30 transition-colors duration-300`}>
                      <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                        <h3 className={`text-xl font-bold ${colors.textLight}`}>{exp.role}</h3>
                        <span className={`text-xs font-mono ${colors.accentTeal} ${colors.accentTealBg}/20 px-2 py-1 rounded`}>
                          {exp.period}
                        </span>
                      </div>
                      <div className={`${colors.textMuted} font-medium mb-4`}>{exp.company} | {exp.location}</div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className={`${colors.textMuted} text-sm leading-relaxed flex items-start gap-2`}>
                            <span className={`${colors.accentTeal} mt-1.5`}>•</span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 mt-4 pt-4 border-t ${colors.border}`}>
                        {exp.tech.map((t, i) => (
                          <span key={i} className={`text-xs ${colors.textMuted} ${colors.darkerBg} px-2 py-1 rounded border border-neutral-800`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline alignment */}
                  <div className="md:w-[45%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold ${colors.textLight} mb-12 flex items-center gap-3`}>
            <Cpu className={`w-8 h-8 ${colors.accentTeal}`} />
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(skills).map((category, index) => (
              <div key={index} className={`${colors.darkerBg}/50 p-6 rounded-xl border ${colors.border} hover:${colors.darkerBg} transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.accentTealBg}/10 rounded-lg ${colors.accentTeal}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${colors.textLight}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className={`px-3 py-1.5 ${colors.darkerBg} ${colors.textMuted} rounded-md text-sm border ${colors.border} hover:${colors.accentTealBg}/20 transition-colors cursor-default`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className={`py-20 ${colors.darkerBg}/50`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold ${colors.textLight} mb-12 flex items-center gap-3`}>
            <Award className={`w-8 h-8 ${colors.accentTeal}`} />
            Honors & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`md:col-span-2 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl border ${colors.border} relative overflow-hidden group`}>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className={`flex items-center gap-2 ${colors.accentTeal} font-bold mb-2`}>
                  <Award className="w-5 h-5" />
                  FIRST PLACE
                </div>
                <h3 className={`text-2xl font-bold ${colors.textLight} mb-2`}>Data Analysis Competition</h3>
                <p className={`text-lg ${colors.textMuted} mb-4`}>Informatics Festival (IFest) 2024</p>
                <p className={`${colors.textMuted} leading-relaxed mb-6`}>
                  Secured first place by developing a high-accuracy model (<span className={`font-mono ${colors.accentTeal}`}>R² ≈ 1.0</span>) using Scikit-learn/XGBoost to forecast AI workloads. 
                  Successfully identified human task allocation as the most significant predictor of AI workload.
                </p>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 ${colors.darkBg}/50 rounded-full text-sm ${colors.textMuted} border ${colors.border}`}>Python</span>
                  <span className={`px-3 py-1 ${colors.darkBg}/50 rounded-full text-sm ${colors.textMuted} border ${colors.border}`}>XGBoost</span>
                  <span className={`px-3 py-1 ${colors.darkBg}/50 rounded-full text-sm ${colors.textMuted} border ${colors.border}`}>Scikit-learn</span>
                </div>
              </div>
            </div>

            <div className={`${colors.darkBg} p-8 rounded-2xl border ${colors.border} flex flex-col justify-center items-center text-center`}>
              <div className={`w-24 h-24 ${colors.accentTealBg}/10 rounded-full flex items-center justify-center mb-4 ${colors.accentTeal}`}>
                <span className="text-3xl font-bold">3.99</span>
              </div>
              <h3 className={`text-xl font-bold ${colors.textLight} mb-1`}>GPA Score</h3>
              <p className={`${colors.textMuted} text-sm`}>Bandung Institute of Technology</p>
              <div className={`mt-4 text-xs ${colors.textMuted}`}>
                Ranked among top students in Informatics Engineering
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold ${colors.textLight} mb-6`}>Let's Build Something Together</h2>
          <p className={`${colors.textMuted} text-lg mb-8`}>
            I'm currently looking for backend engineering roles where I can apply my skills in Go, distributed systems, and AI.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className={`w-full md:w-auto px-8 py-4 ${colors.accentTealBg} ${colors.accentTealHover} text-white rounded-lg font-bold text-lg transition-all duration-200 shadow-lg shadow-red-500/20`}
            >
              Send me an Email
            </a>
            <div className="flex gap-4">
              <a href={personalInfo.linkedin} className={`p-4 ${colors.darkerBg} hover:bg-neutral-800 rounded-lg ${colors.textLight} transition-colors border ${colors.border}`}>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={personalInfo.github} className={`p-4 ${colors.darkerBg} hover:bg-neutral-800 rounded-lg ${colors.textLight} transition-colors border ${colors.border}`}>
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <footer className={`mt-20 pt-8 border-t ${colors.border} ${colors.textMuted} text-sm`}>
            <p>© {new Date().getFullYear()} Derwin Rustanly. Built with React & Tailwind CSS.</p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;