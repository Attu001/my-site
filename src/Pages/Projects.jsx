import React, { useState } from 'react';
import { projectsData, categories } from "../data/projectData"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Filter projects based on category and search term
    const filteredProjects = projectsData.filter(project => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen w-screen  bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mt-24">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Explore my portfolio of creative projects and technical solutions.
                        Each project represents a unique challenge and learning opportunity.
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Input */}
                        <div className="w-full lg:w-96">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search projects, technologies..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Counter */}
                <div className="mb-8 text-center">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
                    </span>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    // No Projects Found State
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                No Projects Found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                We couldn't find any projects matching your search criteria.
                                Try adjusting your filters or search terms.
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSearchTerm('');
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                )}

                {/* Footer Note */}
                <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Interested in collaborating? Let's build something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;