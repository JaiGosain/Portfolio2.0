import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Jai Gosain
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              MERN Stack Developer passionate about creating innovative web solutions 
              and building the future of the web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/JaiGosain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/jai-gosain/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              
              <a
                href="mailto:jaigosain2005@gmail.com"
                className="p-3 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jai Gosain. All rights reserved.
            </p>
            
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 