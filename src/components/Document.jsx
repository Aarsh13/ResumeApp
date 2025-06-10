import React from 'react';

const Document = ({ personalInfo = {}, professionalSummary = '', education = [] , skills=[], experience = [], projects=[]}) => {
  return (
    <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Document Container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* A4 Paper Style */}
          <div className="w-full min-h-[297mm] p-16 bg-white" style={{ aspectRatio: '210/297' }}>
            
            {/* Header Section */}
            <div className="flex items-start gap-8 mb-12">
              {/* Profile Photo */}
              <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Personal Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {personalInfo.fullName || 'Your Name'}
                </h1>
                <h2 className="text-xl text-gray-600 mb-6">
                  {personalInfo.jobTitle || 'Your Job Title'}
                </h2>
                
                {/* Contact Info */}
                <div className="space-y-2 text-gray-700">
                  {personalInfo.email && (
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{personalInfo.email}</span>
                    </div>
                  )}
                  
                  {personalInfo.mobile && (
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{personalInfo.mobile}</span>
                    </div>
                  )}
                  
                  {personalInfo.address && (
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="leading-relaxed">{personalInfo.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            {professionalSummary && (
              <div className="mb-12">
                <div className="border-b-2 border-gray-900 pb-2 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">PROFESSIONAL SUMMARY</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {professionalSummary}
                </p>
              </div>
            )}

            {/* Education */}
            {education.some(edu => edu.degree || edu.institution) && (
              <div className="mb-12">
                <div className="border-b-2 border-gray-900 pb-2 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">EDUCATION</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => {
                    // Only render if at least degree or institution is filled
                    if (!edu.degree && !edu.institution) return null;
                    
                    return (
                      <div key={index} className="flex justify-between items-start">
                        <div className="flex-1">
                          {edu.degree && (
                            <h4 className="text-lg font-semibold text-gray-900">
                              {edu.degree}
                            </h4>
                          )}
                          {edu.institution && (
                            <p className="text-gray-700 font-medium">
                              {edu.institution}
                            </p>
                          )}
                        </div>
                        {(edu.startDate || edu.endDate) && (
                          <div className="text-gray-600 text-right ml-4">
                            <p className="font-medium">
                              {edu.startDate && edu.endDate 
                                ? `${edu.startDate} - ${edu.endDate}`
                                : edu.startDate || edu.endDate
                              }
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Placeholder sections for future expansion */}
            <div className="space-y-12">
              {/* Experience Section Placeholder */}
              <div>
                <div className="border-b-2 border-gray-900 pb-2 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">EXPERIENCE</h3>
                </div>
                <p className="text-gray-500 italic">Add your work experience in the sidebar</p>
              </div>

              {/* Skills Section Placeholder */}
              <div>
                <div className="border-b-2 border-gray-900 pb-2 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">SKILLS</h3>
                </div>
                <p className="text-gray-500 italic">Add your skills in the sidebar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;