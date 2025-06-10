import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 px-8 py-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-medium text-slate-900 tracking-tight">LOGO</h1>
        </div>

        {/* Status Text */}
        <div>
          <p className="text-sm text-slate-500 font-normal">Saving your document...</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-slate-600 hover:text-slate-900 px-3 py-1.5 text-sm font-medium transition-colors duration-200">
            Download
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-200">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;