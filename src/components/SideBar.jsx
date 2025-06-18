import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';

const Sidebar = ({ 
  personalInfo = {}, 
  setPersonalInfo = () => {}, 
  professionalSummary = '', 
  setProfessionalSummary = () => {}, 
  education = [], 
  setEducation = () => {} ,
  experience = [], 
  setExperience = () => {},
  projects = [], 
  setProjects = () => {},
  skills = [], 
  setSkills = () => {}
}) => {
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    professionalSummary: false,
    experience: false,
    education: false,
    skills: false,
    profileUrl: false,
    moreDetails: false, 
    projects: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const addEducation = () => {
    setEducation(prev => [...prev, {
      degree: '',
      institution: '',
      startDate: '',
      endDate: ''
    }]);
  };

  const removeEducation = (index) => {
    setEducation(prev => prev.filter((_, i) => i !== index));
  };

  const updateEducation = (index, field, value) => {
    setEducation(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const addExperience = () => {
    setExperience(prev => [...prev, {
      title: '',       
      company: '',      
      startDate: '',    
      endDate: '',      
      description: ''  
    }]);
  };

  const removeExperience = (index) => {
    setExperience(prev => prev.filter((_, i) => i !== index));
  };

  const updateExperience = (index, field, value) => {
    setExperience(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const addProject = () => {
    setProjects(prev => [...prev, {
      name: '',
      url: '',
      technologies: '',
      description: ''
    }]);
  };

  const removeProject = (index) => {
    setProjects(prev => prev.filter((_, i) => i !== index));
  };

  const updateProject = (index, field, value) => {
    setProjects(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const addSkill = () => {
    setSkills([...skills, { name: '', icon: '' }]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index, field, value) => {
    const updated = [...skills];

    if (field === 'name') {
      const key = value.trim().toLowerCase();
      updated[index].name = value;
      // Use a more reliable icon mapping
      const iconMap = {
        'figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        'git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'mongodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'postgresql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        'tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        'bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        'photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
        'illustrator': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg'
      };
      updated[index].icon = iconMap[key] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${key}/${key}-original.svg`;
    } else {
      updated[index][field] = value;
    }

    setSkills(updated);
  };

  const updatePersonalInfo = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const SectionHeader = ({ title, isExpanded, onToggle, isPremium = false, count = 0 }) => (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors group"
    >
      <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
        {title}
        {count > 0 && (
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {count}
          </span>
        )}
        {isPremium && (
          <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
            Premium
          </span>
        )}
      </span>
      <div className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors">
        {isExpanded ? (
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </button>
  );

  return (
    <div className="w-96 bg-white border-r border-gray-200 h-screen overflow-y-auto shadow-lg">
      {/* Personal Information */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Personal Information"
          isExpanded={expandedSections.personalInfo}
          onToggle={() => toggleSection('personalInfo')}
        />
        {expandedSections.personalInfo && (
          <div className="px-4 pb-6">
            <div className="space-y-4">
              {/* Photo Upload */}
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-3 font-medium">Profile Photo</div>
                <div className="w-24 h-24 mx-auto mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Profile" 
                    className="w-full h-full object-cover"  
                  />
                </div>
                <button className="text-sm text-blue-600 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                  Change Photo
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={personalInfo.fullName || ''}
                    onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="Software Developer"
                    value={personalInfo.jobTitle || ''}
                    onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john.doe@email.com"
                    value={personalInfo.email || ''}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={personalInfo.mobile || ''}
                    onChange={(e) => updatePersonalInfo('mobile', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <textarea
                    placeholder="123 Main Street, City, State 12345"
                    rows="3"
                    value={personalInfo.address || ''}
                    onChange={(e) => updatePersonalInfo('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Professional Summary */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Professional Summary"
          isExpanded={expandedSections.professionalSummary}
          onToggle={() => toggleSection('professionalSummary')}
        />
        {expandedSections.professionalSummary && (
          <div className="px-4 pb-6">
            <textarea 
              placeholder="Write a compelling summary of your professional background, key skills, and career objectives..."
              rows="6"
              value={professionalSummary}
              onChange={(e) => setProfessionalSummary(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm leading-relaxed transition-all"
            />
          </div>
        )}
      </div>

      {/* Experience */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Work Experience"
          isExpanded={expandedSections.experience}
          onToggle={() => toggleSection('experience')}
          count={experience.length}
        />
        {expandedSections.experience && (
          <div className="px-4 pb-6">
            <div className="space-y-4">
              {experience.map((ele, index) => (
                <Experience 
                  key={index}
                  data={ele}
                  index={index}
                  onUpdate={updateExperience}
                  onRemove={removeExperience}
                />
              ))}
              
              <button 
                onClick={addExperience}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-sm font-semibold text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Experience
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Projects"
          isExpanded={expandedSections.projects}
          onToggle={() => toggleSection('projects')}
          count={projects.length}
        />
        {expandedSections.projects && (
          <div className="px-4 pb-6">
            <div className="space-y-4">
              {projects.map((ele, index) => (
                <Project 
                  key={index}
                  data={ele}
                  index={index}
                  onUpdate={updateProject}
                  onRemove={removeProject}
                />
              ))}
              
              <button 
                onClick={addProject}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-sm font-semibold text-gray-600 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Project
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Education */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Education"
          isExpanded={expandedSections.education}
          onToggle={() => toggleSection('education')}
          count={education.length}
        />
        {expandedSections.education && (
          <div className="px-4 pb-6">
            <div className="space-y-4">
              {education.map((ele, index) => (
                <Education 
                  key={index}
                  data={ele}
                  index={index}
                  onUpdate={updateEducation}
                  onRemove={removeEducation}
                />
              ))}
              
              <button 
                onClick={addEducation}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-sm font-semibold text-gray-600 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Education
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Skills */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Skills & Technologies"
          isExpanded={expandedSections.skills}
          onToggle={() => toggleSection('skills')}
          count={skills.length}
        />
        {expandedSections.skills && (
          <div className="px-4 pb-6">
            <div className="flex flex-wrap gap-3 mb-4">
              {skills.map((ele, index) => (
                <Skill
                  key={index}
                  data={ele}
                  index={index}
                  onUpdate={updateSkill}
                  onRemove={removeSkill}
                />
              ))}
            </div>

            <button 
              onClick={addSkill}
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-full text-sm font-semibold text-gray-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Skill
            </button>
          </div>
        )}
      </div>

      {/* Profile URL */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Portfolio & Links"
          isExpanded={expandedSections.profileUrl}
          onToggle={() => toggleSection('profileUrl')}
        />
        {expandedSections.profileUrl && (
          <div className="px-4 pb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio/Website URL</label>
                <input
                  type="url"
                  placeholder="https://yourportfolio.com"
                  value={personalInfo.profileUrl || ''}
                  onChange={(e) => updatePersonalInfo('profileUrl', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* More Details */}
      <div>
        <SectionHeader
          title="Additional Features"
          isExpanded={expandedSections.moreDetails}
          onToggle={() => toggleSection('moreDetails')}
          isPremium={true}
        />
        {expandedSections.moreDetails && (
          <div className="px-4 pb-6">
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Features</h3>
              <p className="text-sm text-gray-600 mb-4">Unlock advanced customization options, additional templates, and export formats.</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Upgrade to Premium
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;