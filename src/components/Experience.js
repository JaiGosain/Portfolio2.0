import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Web Development Intern",
      company: "UptoSkills",
      duration: "June 2025 – Present",
      location: "Remote",
      description: [
        "Installed, developed and maintained RESTful APIs using Node.js and Express.js to manage video content and user operations",
        "Integrated MongoDB with Mongoose for efficient storage and retrieval of video and user data",
        "Implemented frontend components with HTML, CSS, JavaScript, including form handling and real-time DOM updates for better UX",
        "Ensured responsive layout and basic UI design improvements to enhance user experience across devices",
        "Worked with tools like Postman, MongoDB Compass, VS Code, and Git for API testing, debugging, and version control",
        "Collaborated with the frontend and backend teams to ensure smooth API integration and functional UI delivery"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "HTML", "CSS", "JavaScript", "Git", "Postman"],
      icon: <FaBriefcase className="text-2xl text-blue-600" />
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications",
      field: "Computer Applications",
      institution: "Management Education & Research Institute (MERI)",
      duration: "2023 - Present",
      description: "Currently pursuing my degree in Computer Applications with focus on web development and software engineering principles.",
      icon: <FaGraduationCap className="text-2xl text-green-600" />
    },
    {
      degree: "Intermediate",
      field: "High School",
      institution: "Richmondd Global School",
      duration: "Completed",
      description: "Completed with 83% marks, building strong foundation in computer science and mathematics.",
      icon: <FaGraduationCap className="text-2xl text-green-600" />
    },
    {
      degree: "High School",
      field: "Secondary Education",
      institution: "Richmondd Global School",
      duration: "Completed",
      description: "Completed with 80% marks, establishing academic excellence and problem-solving skills.",
      icon: <FaGraduationCap className="text-2xl text-green-600" />
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Experience</span> & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my development career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <FaBriefcase className="mr-3 text-blue-600" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card relative pl-8 border-l-4 border-l-blue-500"
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    {exp.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {exp.title}
                    </h4>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaBriefcase className="text-blue-500" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      As a Web Development Intern at UptoSkills, I've been actively involved in developing and maintaining 
                      web applications, working with both frontend and backend technologies to create seamless user experiences.
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-gray-600">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <FaGraduationCap className="mr-3 text-green-600" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card relative pl-8 border-l-4 border-l-green-500"
                >
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    {edu.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {edu.degree}
                    </h4>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaGraduationCap className="text-green-500" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt className="text-green-500" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                Certifications & Achievements
              </h4>
              
              <div className="space-y-4">
                <div className="card border-l-4 border-l-green-500">
                  <h5 className="font-semibold text-gray-800 mb-2">
                    IBM Skills Build Web Development Certificate
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Comprehensive web development certification covering modern web technologies and best practices
                  </p>
                </div>
                
                <div className="card border-l-4 border-l-green-500">
                  <h5 className="font-semibold text-gray-800 mb-2">
                    One Roadmap Frontend Certificate
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Specialized frontend development certification focusing on HTML, CSS, and JavaScript mastery
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 