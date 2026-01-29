import React, { useState } from 'react';
import { Trophy, Award, Calendar, Users, ExternalLink, Medal, Star } from 'lucide-react';
import { competitions } from '../data/Competitions.ts';

interface CompetitionsSectionProps {
    isDarkMode: boolean;
}

const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ isDarkMode }) => {
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const filteredCompetitions = activeFilter
        ? competitions.filter(comp => comp.category === activeFilter)
        : competitions;

    const getRankIcon = (rank: string) => {
        if (rank.includes('1') || rank.toLowerCase().includes('first') || rank.toLowerCase().includes('or')) {
            return <Trophy className="text-yellow-500" size={24} />;
        } else if (rank.includes('2') || rank.toLowerCase().includes('argent')) {
            return <Medal className="text-gray-400" size={24} />;
        } else if (rank.includes('3') || rank.toLowerCase().includes('bronze')) {
            return <Medal className="text-amber-700" size={24} />;
        }
        return <Award className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={24} />;
    };

    return (
        <section
            id="competitions"
            className={`py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Concours & Hackathons
                    </h2>
                    <div className={`w-24 h-1 mx-auto rounded ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                    <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Mes participations et réussites dans diverses compétitions de développement et hackathons.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button
                        onClick={() => setActiveFilter(null)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeFilter === null
                                ? (isDarkMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg')
                                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
                        }`}
                    >
                        Tous
                    </button>

                    <button
                        onClick={() => setActiveFilter('hackathon')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeFilter === 'hackathon'
                                ? (isDarkMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg')
                                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
                        }`}
                    >
                        Hackathons
                    </button>
                    <button
                        onClick={() => setActiveFilter('soutenance')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeFilter === 'soutenance'
                                ? (isDarkMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg')
                                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
                        }`}
                    >
                        Soutenance
                    </button>
                    <button
                        onClick={() => setActiveFilter('concours')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeFilter === 'concours'
                                ? (isDarkMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg')
                                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
                        }`}
                    >
                        Concours
                    </button>

                    <button
                        onClick={() => setActiveFilter('competition')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            activeFilter === 'competition'
                                ? (isDarkMode ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg')
                                : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
                        }`}
                    >
                        Compétitions
                    </button>
                </div>

                {/* Competitions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCompetitions.map((competition) => (
                        <div
                            key={competition.id}
                            className={`group relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                                isDarkMode ? 'bg-gray-700' : 'bg-white'
                            }`}
                        >
                            {/* Image avec overlay gradient */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={competition.imageUrl}
                                    alt={competition.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t opacity-60`}></div>

                                {/* Rank Badge */}
                                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                                    {getRankIcon(competition.rank)}
                                    <span className="text-sm font-bold text-gray-900">{competition.rank}</span>
                                </div>

                                {/* Category Badge */}
                                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                                    competition.category === 'hackathon'
                                        ? 'bg-purple-500 text-white'
                                        : 'bg-green-500 text-white'
                                }`}>
                                    {competition.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {competition.title}
                                </h3>

                                {/* Organizer and Date */}
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Users size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {competition.organizer}
                    </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-4">
                                    <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {competition.date}
                  </span>
                                </div>

                                <p className={`mb-4 text-sm line-clamp-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {competition.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {competition.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                                                isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'
                                            }`}
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {/* Achievements */}
                                {competition.achievements && competition.achievements.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className={`text-sm font-semibold mb-2 flex items-center gap-1 ${
                                            isDarkMode ? 'text-gray-200' : 'text-gray-800'
                                        }`}>
                                            <Star size={14} className="text-yellow-500" />
                                            Réalisations
                                        </h4>
                                        <ul className="space-y-1">
                                            {competition.achievements.map((achievement, idx) => (
                                                <li
                                                    key={idx}
                                                    className={`text-xs flex items-start gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                                >
                                                    <span className={`mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Certificate Link */}
                                {competition.certificateUrl && competition.certificateUrl !== '#' && (
                                    <a
                                        href={competition.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                                            isDarkMode
                                                ? 'text-blue-400 hover:text-blue-300'
                                                : 'text-blue-600 hover:text-blue-700'
                                        }`}
                                    >
                                        <ExternalLink size={16} />
                                        Voir le certificat
                                    </a>
                                )}
                            </div>

                            {/* Hover effect border */}
                            <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current transition-colors duration-300 ${
                                isDarkMode ? 'group-hover:border-blue-400' : 'group-hover:border-blue-500'
                            }`}></div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredCompetitions.length === 0 && (
                    <div className="text-center py-12">
                        <Trophy size={64} className={`mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            Aucune compétition trouvée pour ce filtre.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CompetitionsSection;