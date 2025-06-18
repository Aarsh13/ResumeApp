import React from 'react';

const Experience = ({ data, index, onUpdate, onRemove }) => (
  <div className="space-y-3 p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-green-50 to-blue-50 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div className="flex-1 space-y-3">
        {/* Position Title input */}
        <input
          type="text"
          placeholder="Job Title (e.g., Senior Software Engineer)"
          value={data.title}
          onChange={(e) => onUpdate(index, 'title', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-semibold"
        />

        {/* Company Name input */}
        <input
          type="text"
          placeholder="Company Name"
          value={data.company}
          onChange={(e) => onUpdate(index, 'company', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />

        {/* Start and End date inputs */}
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Start Date (MM/YYYY)"
            value={data.startDate}
            onChange={(e) => onUpdate(index, 'startDate', e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="End Date (MM/YYYY or Present)"
            value={data.endDate}
            onChange={(e) => onUpdate(index, 'endDate', e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Description textarea */}
        <textarea
          placeholder="• Describe your key responsibilities and achievements&#10;• Use bullet points for better readability&#10;• Include quantifiable results when possible"
          value={data.description}
          onChange={(e) => onUpdate(index, 'description', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          rows="4"
        />
      </div>

      {/* Remove button */}
      {index >= 0 && (
        <button
          onClick={() => onRemove(index)}
          className="ml-3 p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  </div>
);

export default Experience;