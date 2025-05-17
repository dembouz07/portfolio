import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className={`text-xl font-medium mt-8 mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Bonjour, je suis
            </h2>
            <h1 className="text-5xl md:text-4xl font-bold mb-4">
              Ousseynou Faye
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Develppeur Logiciel
            </h3>
            <p className={`text-lg mb-8 max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Je conçois et développe des logiciels robustes, évolutifs et intuitifs. Passionné par la résolution de problèmes, j’analyse les besoins, structure les fonctionnalités et transforme les idées en applications fiables et performantes. Mon objectif : créer des solutions logicielles qui apportent une vraie valeur aux utilisateurs.            </p>
            
            <div className="flex gap-6 mb-8">
              <a 
                href="https://github.com/dembouz07/"
                className={`hover:opacity-80 transition-opacity ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ousseynou-faye-489725325/"
                className={`hover:opacity-80 transition-opacity ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="ousinfaye4@gmail.com"
                className={`hover:opacity-80 transition-opacity ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#projects"
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Projets
              </a>
              <a 
                href="#contact" 
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-transparent border border-gray-600 hover:bg-gray-800 text-white' 
                    : 'bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900'
                }`}
              >
                Contacter Moi
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://image.noelshack.com/fichiers/2025/18/2/1745882967-ouz-o.jpg"
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;