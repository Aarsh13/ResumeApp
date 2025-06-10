import React from 'react';

const Skill = ({ data, index, onUpdate, onRemove }) => (
  <div className="flex items-center px-3 py-1.5 rounded-full shadow-sm border border-gray-300">
    {/* Icon (uses default if none provided) */}
    <img
      src={data.icon}
      alt={data.name || 'Skill'}
      className="w-4 h-4 object-contain mr-1"
    />

    {/* Editable name */}
    <input
      type="text"
      placeholder="Skill"
      value={data.name}
      onChange={(e) => onUpdate(index, 'name', e.target.value)}
      className="bg-transparent outline-none text-sm w-24 sm:w-32"
    />

    {/* Remove button */}
    <button
      onClick={() => onRemove(index)}
      className="text-gray-500 hover:text-gray-700 ml-1"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default Skill;
