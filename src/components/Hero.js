import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Picture Placeholder */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-8">
            JG
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            Hi, I'm <span className="gradient-text">Jai Gosain</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Web Development Intern | MERN Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about building modern web applications with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. 
            Currently working as a Web Development Intern at UptoSkills, creating seamless user experiences and robust backend solutions.
          </p>

          {/* Location & Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-blue-600" />
              <span>+91 7065402124</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <motion.a
              href="https://github.com/JaiGosain"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-300"
            >
              <FaGithub size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/jai-gosain/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:jaigosain2005@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full transition-all duration-300"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <button
              onClick={scrollToAbout}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaArrowDown size={24} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 