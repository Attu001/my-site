import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Project Image */}
      <div className="relative  overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="opacity-80 h-full w-full">
            <img
            src={project?.image}

            />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            GitHub
          </a>
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-white border hover:from-blue-600 hover:to-purple-700 text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-blue-500 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;