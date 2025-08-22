import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaGitAlt, FaGithub, FaNpm, FaCode, FaDatabase 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiMongoose, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-500" />, level: 95 },
        { name: "CSS", icon: <FaCss3Alt className="text-2xl text-blue-600" />, level: 90 },
        { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" />, level: 85 },
        { name: "React.js", icon: <FaReact className="text-2xl text-blue-500" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl text-cyan-500" />, level: 75 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-600" />, level: 80 },
        { name: "Express.js", icon: <SiExpress className="text-2xl text-gray-800" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-500" />, level: 75 },
        { name: "Mongoose", icon: <SiMongoose className="text-2xl text-orange-600" />, level: 75 }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" />, level: 85 },
        { name: "C++", icon: <FaCode className="text-2xl text-blue-700" />, level: 75 },
        { name: "Java", icon: <FaCode className="text-2xl text-red-600" />, level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" />, level: 80 },
        { name: "Git", icon: <FaGitAlt className="text-2xl text-orange-600" />, level: 80 },
        { name: "GitHub", icon: <FaGithub className="text-2xl text-gray-800" />, level: 85 },
        { name: "Postman", icon: <FaCode className="text-2xl text-orange-500" />, level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've developed expertise in various technologies and frameworks. Here's a comprehensive overview 
            of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {skill.icon}
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Additional Skills & Knowledge
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RESTful APIs", "JSON", "JWT Authentication", "Bootstrap", "Responsive Design",
              "API Integration", "Database Design", "Version Control", "Problem Solving",
              "Team Collaboration", "Agile Methodologies", "Debugging", "Performance Optimization",
              "MongoDB Compass", "VS Code", "DOM Manipulation", "Async/Await", "Fetch API"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 