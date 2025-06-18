import React from 'react';

const Document = ({ personalInfo = {}, professionalSummary = '', education = [], skills = [], experience = [], projects = [] }) => {
  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Document Container */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
          {/* A4 Paper Style */}
          <div className="w-full min-h-[297mm] p-16 bg-white" style={{ aspectRatio: '210/297' }}>
            
            {/* Header Section */}
            <div className="flex items-start gap-8 mb-12">
              {/* Profile Photo */}
              <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Personal Info */}
              <div className="flex-1">
                <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                  {personalInfo.fullName || 'Your Name'}
                </h1>
                <h2 className="text-2xl text-blue-600 mb-8 font-medium">
                  {personalInfo.jobTitle || 'Your Job Title'}
                </h2>
                
                {/* Contact Info */}
                <div className="grid grid-cols-1 gap-3 text-gray-700">
                  {personalInfo.email && (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium">{personalInfo.email}</span>
                    </div>
                  )}
                  
                  {personalInfo.mobile && (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-medium">{personalInfo.mobile}</span>
                    </div>
                  )}
                  
                  {personalInfo.address && (
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="leading-relaxed font-medium">{personalInfo.address}</span>
                    </div>
                  )}

                  {personalInfo.profileUrl && (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <a href={personalInfo.profileUrl} className="font-medium text-blue-600 hover:text-blue-800 transition-colors">
                        {personalInfo.profileUrl}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            {professionalSummary && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">PROFESSIONAL SUMMARY</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <p className="text-gray-700 leading-relaxed text-justify font-medium">
                    {professionalSummary}
                  </p>
                </div>
              </div>
            )}

            {/* Experience */}
            {experience.some(exp => exp.title || exp.company) && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">EXPERIENCE</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-600 to-transparent"></div>
                </div>
                <div className="space-y-8">
                  {experience.map((exp, index) => {
                    if (!exp.title && !exp.company) return null;
                    
                    return (
                      <div key={index} className="relative pl-8 border-l-2 border-gray-200">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              {exp.title && (
                                <h4 className="text-xl font-bold text-gray-900 mb-1">
                                  {exp.title}
                                </h4>
                              )}
                              {exp.company && (
                                <p className="text-lg text-blue-600 font-semibold">
                                  {exp.company}
                                </p>
                              )}
                            </div>
                            {(exp.startDate || exp.endDate) && (
                              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                                <p className="text-sm font-semibold text-gray-700">
                                  {exp.startDate && exp.endDate 
                                    ? `${exp.startDate} - ${exp.endDate}`
                                    : exp.startDate || exp.endDate
                                  }
                                </p>
                              </div>
                            )}
                          </div>
                          {exp.description && (
                            <p className="text-gray-700 leading-relaxed">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Projects */}
            {projects.some(project => project.name || project.description) && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7v2a2 2 0 01-2 2H7a2 2 0 01-2-2V4m14 7v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m14 7v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">PROJECTS</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-600 to-transparent"></div>
                </div>
                <div className="grid gap-6">
                  {projects.map((project, index) => {
                    if (!project.name && !project.description) return null;
                    
                    return (
                      <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            {project.name && (
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {project.name}
                              </h4>
                            )}
                            {project.technologies && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {project.technologies.split(',').map((tech, techIndex) => (
                                  <span key={techIndex} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-purple-700 border border-purple-200">
                                    {tech.trim()}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          {project.url && (
                            <a href={project.url} className="text-purple-600 hover:text-purple-800 transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                        {project.description && (
                          <p className="text-gray-700 leading-relaxed">
                            {project.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Education */}
            {education.some(edu => edu.degree || edu.institution) && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">EDUCATION</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-orange-600 to-transparent"></div>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => {
                    if (!edu.degree && !edu.institution) return null;
                    
                    return (
                      <div key={index} className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            {edu.degree && (
                              <h4 className="text-lg font-bold text-gray-900 mb-1">
                                {edu.degree}
                              </h4>
                            )}
                            {edu.institution && (
                              <p className="text-orange-700 font-semibold">
                                {edu.institution}
                              </p>
                            )}
                          </div>
                          {(edu.startDate || edu.endDate) && (
                            <div className="bg-white px-4 py-2 rounded-lg border border-orange-200">
                              <p className="text-sm font-semibold text-gray-700">
                                {edu.startDate && edu.endDate 
                                  ? `${edu.startDate} - ${edu.endDate}`
                                  : edu.startDate || edu.endDate
                                }
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && skills.some(skill => skill.name) && (
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">SKILLS</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-indigo-600 to-transparent"></div>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => {
                      if (!skill.name) return null;
                      
                      return (
                        <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-200 hover:shadow-md transition-shadow">
                          {skill.icon && (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-5 h-5 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          )}
                          <span className="text-sm font-semibold text-gray-800">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;