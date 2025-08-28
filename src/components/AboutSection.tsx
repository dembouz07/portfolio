import React from 'react';
import { Download } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            À propos de moi
          </h2>
          <div className={`w-24 h-1 mx-auto rounded ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className={`absolute inset-0 rounded-lg transform translate-x-3 translate-y-3 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
              <img 
                src="https://image.noelshack.com/fichiers/2025/18/6/1746299751-ouz-o.jpg"
                alt="Working at desk" 
                className="relative rounded-lg z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Mon Parcours
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Avec plus de 2 ans d'expérience dans le développement logiciel, j'ai affiné mes compétences à travers différentes technologies et méthodologies. Ma passion pour la création de solutions fonctionnelles et bien structurées me pousse à apprendre et à m'améliorer constamment.
            </p>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              J'ai débuté mon parcours en tant que développeur front-end, avant d'élargir mon expertise vers le développement back-end et la conception de bases de données. Cette approche complète me permet de concevoir des solutions globales et évolutives, adaptées aux besoins des utilisateurs et des entreprises.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Name:</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Ousseynou Faye</p>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email:</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>ousinfaye4@gmail.com</p>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Ville:</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Dakar, Sénégal</p>
              </div>
            </div>
            
            <a 
              href="https://cvdesignr.com/p/kpa3PLAQ8PmWG30"
              className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <Download size={18} className="mr-2" />
              Telecharger CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
