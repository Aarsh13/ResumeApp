import React from 'react';

const Education = ({ data, index, onUpdate, onRemove }) => (
  <div className="space-y-3 p-3 border border-gray-200 rounded-lg">
    <div className="flex justify-between items-start">
      <div className="flex-1 space-y-3">
        {/* Degree/Certificate input */}
        <input
          type="text"
          placeholder="Degree/Certificate"
          value={data.degree}
          onChange={(e) => onUpdate(index, 'degree', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
        />

        {/* Institution name input */}
        <input
          type="text"
          placeholder="Institution name"
          value={data.institution}
          onChange={(e) => onUpdate(index, 'institution', e.target.value)}
          className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
        />

        {/* Start and End date inputs */}
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Start date"
            value={data.startDate}
            onChange={(e) => onUpdate(index, 'startDate', e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <input
            type="text"
            placeholder="End date"
            value={data.endDate}
            onChange={(e) => onUpdate(index, 'endDate', e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Remove button */}
      {index >= 0 && (
        <button
          onClick={() => onRemove(index)}
          className="ml-2 p-1 text-gray-700 hover:text-gray-950"
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
