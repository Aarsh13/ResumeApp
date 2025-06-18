import React from 'react';

const Education = ({ data, index, onUpdate, onRemove }) => (
  <div className="space-y-3 p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div className="flex-1 space-y-3">
        {/* Degree/Certificate input */}
        <input
          type="text"
          placeholder="Degree/Certificate (e.g., Bachelor of Computer Science)"
          value={data.degree}
          onChange={(e) => onUpdate(index, 'degree', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
        />

        {/* Institution name input */}
        <input
          type="text"
          placeholder="Institution Name"
          value={data.institution}
          onChange={(e) => onUpdate(index, 'institution', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />

        {/* Start and End date inputs */}
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Start Year (YYYY)"
            value={data.startDate}
            onChange={(e) => onUpdate(index, 'startDate', e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="End Year (YYYY)"
            value={data.endDate}
            onChange={(e) => onUpdate(index, 'endDate', e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
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

export default Education;