import React from 'react';

const Project = ({ data, index, onUpdate, onRemove }) => (
  <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
    <div className="flex justify-between items-start">
      <div className="flex-1 space-y-3">
        {/* Project Name input */}
        <input
          type="text"
          placeholder="Project Name"
          value={data.name}
          onChange={(e) => onUpdate(index, 'name', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {/* Project URL input */}
        <input
          type="url"
          placeholder="Project URL (optional)"
          value={data.url}
          onChange={(e) => onUpdate(index, 'url', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {/* Technologies input */}
        <input
          type="text"
          placeholder="Technologies used (comma separated)"
          value={data.technologies}
          onChange={(e) => onUpdate(index, 'technologies', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        {/* Description textarea */}
        <textarea
          placeholder="Describe the project, your role, and key achievements."
          value={data.description}
          onChange={(e) => onUpdate(index, 'description', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="3"
        />
      </div>

      {/* Remove button */}
      {index >= 0 && (
        <button
          onClick={() => onRemove(index)}
          className="ml-2 p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  </div>
);

export default Project;