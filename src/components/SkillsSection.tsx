import React from 'react';
import { skills } from '../data/skills';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryTitles = {
    frontend: "Frontend",
    backend: "Backend",
    design: "Design",
    other: "Other"
  };

  return (
    <section 
      id="skills" 
      className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Mes compétences
          </h2>
          <div className={`w-24 h-1 mx-auto rounded ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            J'ai de l'expérience avec un large éventail de technologies et d'outils à travers l'ensemble de la pile de développement.          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              
              <div className="space-y-5">
                {categorySkills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level * 20}%
                      </span>
                    </div>
                    <div 
                      className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                    >
                      <div 
                        className={`h-full rounded-full ${
                          category === 'frontend' ? 'bg-blue-500' :
                          category === 'backend' ? 'bg-green-500' :
                          category === 'design' ? 'bg-purple-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;