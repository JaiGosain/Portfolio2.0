import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaServer } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "Developed a responsive weather forecasting web app using HTML, CSS, and JavaScript, integrating the OpenWeatherMap API to fetch and display real-time weather data dynamically through API calls, asynchronous JavaScript (fetch, async/await), and DOM manipulation.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Fetch API", "Async/Await"],
      category: "frontend",
      github: "https://github.com/JaiGosain/Weather-App",
      live: "",
      features: ["Real-time weather data", "OpenWeatherMap API integration", "Responsive design", "Async JavaScript", "DOM manipulation"]
    },
   
    {
      id: 3,
      title: "URL-Shortener",
      description: "Full-Stack URL Shortener built with Node.js, Express, MongoDB,featuring user authentication, link management, and click tracking.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "JWT", "MySQL"],
      category: "fullstack",
      github: "https://github.com/JaiGosain/URL-Shortener",
      live: "#",
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing", "Admin dashboard"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills and projects with smooth animations and interactive components.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Responsive Design", "JavaScript"],
      category: "frontend",
      github: "https://github.com/JaiGosain/Portfolio2.0",
      live: "#",
      features: ["Responsive design", "Smooth animations", "Interactive components", "Modern UI/UX", "Tailwind CSS"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'frontend', label: 'Frontend', icon: <FaCode /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FaServer /> },
    { id: 'backend', label: 'Backend', icon: <FaDatabase /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've built to showcase my skills and passion for web development. 
            Each project represents different aspects of my technical expertise.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work or want to collaborate on a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/JaiGosain"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View More on GitHub
            </a>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Let's Work Together
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 