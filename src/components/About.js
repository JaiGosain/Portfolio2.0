import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with HTML, CSS, JavaScript and modern web technologies."
    },
    {
      icon: <FaServer className="text-4xl text-blue-600" />,
      title: "Backend Development",
      description: "Creating robust server-side applications using Node.js and Express.js with RESTful APIs."
    },
    {
      icon: <FaDatabase className="text-4xl text-blue-600" />,
      title: "Database Management",
      description: "Working with both MongoDB and MySQL for data storage and Mongoose for elegant object modeling."
    },
    {
      icon: <FaMobile className="text-4xl text-blue-600" />,
      title: "Responsive Design",
      description: "Ensuring applications work seamlessly across all devices and screen sizes."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Web Development Intern at UptoSkills with expertise in building modern web applications. 
            My journey in web development started with a curiosity to create things that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Who I Am
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm Jai Gosain, a dedicated Web Development Intern at UptoSkills who loves turning ideas into reality through code. 
              My passion lies in creating seamless user experiences and building robust, scalable applications 
              that solve real-world problems.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Currently pursuing my Bachelor of Computer Applications at Management Education & Research Institute (MERI), 
              I specialize in full-stack development, from designing intuitive user interfaces with HTML, CSS, and JavaScript 
              to implementing powerful backend solutions with Node.js, Express.js, and MongoDB. I'm constantly learning and 
              exploring new technologies to stay ahead in this ever-evolving field.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Web Development Intern
              </div>
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </div>
              <div className="bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                MERN Stack
              </div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 