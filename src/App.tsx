import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, MapPin, ExternalLink, Code2, Database, Globe, Bot, BarChart3, User, Briefcase, Phone, Download, Menu, X, Home, FileText, FolderOpen } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fullName = "Dhruvil Rami";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for name
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullName.length) {
        setTypedText(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const skills = [
    "JavaScript", "Python", "React", "Node.js", "HTML/CSS", "Git",
    "SQL", "MongoDB", "Django", "Flask", "Microsoft Azure", "CI/CD", "REST API"
  ];

  const projects = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Online Tourism Portal",
      description: "A web application built using Python (Django), HTML, CSS, JavaScript, and SQLite3. It features user authentication with sign-up/login, a tour booking and cancellation system with detailed itineraries and pricing, email integration for booking confirmations, and an admin panel to manage tours through custom Django models.",
      link: "https://github.com/DhruvilRami",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "2020 Presidential Election Tweet Analysis",
      description: "Conducted sentiment and trend analysis on over 100,000 tweets using Python, MongoDB, and NLP techniques (TextBlob, VADER). Achieved 90% sentiment classification accuracy and developed Logistic Regression and Random Forest models to predict tweet sources and voter intent.",
      link: "https://github.com/DhruvilRami",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "2020 Presidential Election Tweet Analysis",
      description: "Conducted sentiment and trend analysis on over 100,000 tweets using Python, MongoDB, and NLP techniques (TextBlob, VADER). Achieved 90% sentiment classification accuracy and developed Logistic Regression and Random Forest models to predict tweet sources and voter intent.",
      link: "https://github.com/DhruvilRami",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "DevLink – Developer Collaboration Platform",
      description: "A full-stack web application built with Python (Flask), React, and MongoDB that enables developers to create profiles, showcase projects, and connect with peers. Features include user authentication (JWT), project uploads, messaging, and RESTful APIs for backend operations.",
      link: "https://github.com/DhruvilRami",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadCV = () => {
    // Create a sample CV download - replace with your actual CV file
    const link = document.createElement('a');
    link.href = '/cv-dhruvil-rami.pdf'; // You'll need to add your CV file to the public folder
    link.download = 'Dhruvil_Rami_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-xl">Dhruvil Rami</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <User className="w-4 h-4" />
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FolderOpen className="w-4 h-4" />
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Contact
                </button>
                
                {/* CV Download Button */}
                <button
                  onClick={downloadCV}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    <User className="w-4 h-4" />
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    <FolderOpen className="w-4 h-4" />
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    <Phone className="w-4 h-4" />
                    Contact
                  </button>
                  <button
                    onClick={downloadCV}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg w-fit"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Header */}
        <header id="home" className="container mx-auto px-6 py-32 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-3">
                <Code2 className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-25 animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Recent Graduate • Software Developer • Problem Solver
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <Mail className="w-5 h-5" />, href: "mailto:dhruvilrami2491@gmail.com", label: "Email" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dhruvil-rami-09a75b226/", label: "LinkedIn" },
                { icon: <Github className="w-5 h-5" />, href: "https://github.com/DhruvilRami", label: "GitHub" },
                { icon: <MapPin className="w-5 h-5" />, href: "#", label: "Houston, TX" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 pb-20">
          <div className="grid gap-8 max-w-6xl mx-auto">
            
            {/* About Section */}
            <section id="about" className={`transition-all duration-1000 transform delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">About Me</h2>
                </div>
                
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Hi, I'm <span className="text-blue-400 font-semibold">Dhruvil Rami</span>, a passionate and motivated Computer Science graduate with a Master's degree from Cleveland State University. I am currently seeking full-time opportunities as a Software Engineer or Python Developer, where I can apply my technical expertise to create impactful software solutions.
                  </p>
                  <p>
                    During my Master's, I worked on a <span className="text-purple-400 font-semibold">Data Analysis project</span> focused on sentiment analysis, where I built and evaluated two machine learning models to uncover insights and improve predictive accuracy.
                  </p>
                  <p>
                    I also developed <span className="text-green-400 font-semibold">Tourmania</span>, an online tourism portal built with Python (Django), HTML, CSS, JavaScript, and SQLite3.
                  </p>
                  <p>
                    With a strong foundation in Python development, web frameworks, and data analysis, I am eager to contribute to innovative projects, grow as a professional, and bring value to teams building real-world applications.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className={`transition-all duration-1000 transform delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white px-4 py-3 rounded-2xl text-center font-medium hover:from-blue-500/30 hover:to-purple-500/30 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg backdrop-blur-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`transition-all duration-1000 transform delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.gradient} mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`transition-all duration-1000 transform delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "dhruvilrami2491@gmail.com", href: "mailto:dhruvilrami2491@gmail.com", gradient: "from-red-500 to-pink-500" },
                    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/dhruvil-rami", href: "https://www.linkedin.com/in/dhruvil-rami-09a75b226/", gradient: "from-blue-500 to-cyan-500" },
                    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "github.com/DhruvilRami", href: "https://github.com/DhruvilRami", gradient: "from-gray-500 to-slate-600" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Houston, Texas", href: "#", gradient: "from-green-500 to-emerald-500" }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group ${contact.href === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${contact.gradient} mb-3 group-hover:rotate-12 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="text-white font-medium text-sm hover:text-blue-300 transition-colors">
                        {contact.value}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 border-t border-white/10">
          <p>&copy; 2025 Dhruvil Rami. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
