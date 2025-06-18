import React from 'react';

const Skill = ({ data, index, onUpdate, onRemove }) => (
  <div className="flex items-center px-3 py-2 rounded-full shadow-sm border border-gray-300 bg-white hover:shadow-md transition-shadow group">
    {/* Icon (uses default if none provided) */}
    {data.icon && (
      <img
        src={data.icon}
        alt={data.name || 'Skill'}
        className="w-4 h-4 object-contain mr-2"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    )}

    {/* Editable name */}
    <input
      type="text"
      placeholder="Skill name"
      value={data.name}
      onChange={(e) => onUpdate(index, 'name', e.target.value)}
      className="bg-transparent outline-none text-sm font-medium w-20 sm:w-28 text-gray-800"
    />

    {/* Remove button */}
    <button
      onClick={() => onRemove(index)}
      className="text-gray-400 hover:text-red-500 ml-2 opacity-0 group-hover:opacity-100 transition-all"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

export default Skill;