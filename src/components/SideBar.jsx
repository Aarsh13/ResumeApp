import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
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
  skills = [], 
  setSkills = () => {}
}) => {
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: false,
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
    updated[index].icon = "https://github.com/devicons/devicon/blob/v2.16.0/icons/aftereffects/"+key+"-original.svg";
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

  const SectionHeader = ({ title, isExpanded, onToggle, isPremium = false }) => (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
    >
      <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
        {title}
        {isPremium && (
          <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-medium">
            Premium
          </span>
        )}
      </span>
      <div className="w-4 h-4 text-gray-400">
        {isExpanded ? (
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
            <path d="M4 6h8v1H4z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full">
            <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        )}
      </div>
    </button>
  );

  return (
    <div className="w-100 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Personal Information */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Personal informations"
          isExpanded={expandedSections.personalInfo}
          onToggle={() => toggleSection('personalInfo')}
        />
        {expandedSections.personalInfo && (
          <div className="px-4 pb-4">
            <div className="space-y-4">
              {/* Photo Upload */}
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-3">Upload your photo</div>
                <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Profile" 
                    className="w-full h-full object-cover"  
                  />
                </div>
                <button className="text-sm text-gray-700 border border-gray-200 px-3 py-1 rounded hover:bg-gray-50">
                  Browse photos
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Full name</label>
                  <input
                    type="text"
                    placeholder="Christina Sebastian"
                    value={personalInfo.fullName || ''}
                    onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Job title</label>
                  <input
                    type="text"
                    placeholder="UI UX Designer"
                    value={personalInfo.jobTitle || ''}
                    onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Email address</label>
                  <input
                    type="email"
                    placeholder="christina1992@gmail.com"
                    value={personalInfo.email || ''}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Mobile number</label>
                  <input
                    type="tel"
                    placeholder="+00 9876543210"
                    value={personalInfo.mobile || ''}
                    onChange={(e) => updatePersonalInfo('mobile', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Address</label>
                  <textarea
                    placeholder="123 Main Street, Cityville, State 12345 United States"
                    rows="3"
                    value={personalInfo.address || ''}
                    onChange={(e) => updatePersonalInfo('address', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
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
          title="Professional summary"
          isExpanded={expandedSections.professionalSummary}
          onToggle={() => toggleSection('professionalSummary')}
        />
        {expandedSections.professionalSummary && (
          <div className="px-4 pb-4">
            <textarea 
              placeholder="Designs digital interfaces and user experiences that are intuitive, visually appealing, and improve user satisfaction and engagement."
              rows="6"
              value={professionalSummary}
              onChange={(e) => setProfessionalSummary(e.target.value)}
              className="w-full px-3 py-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none text-sm leading-relaxed"
            />
          </div>
        )}
      </div>

      {/* Education */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Education"
          isExpanded={expandedSections.education}
          onToggle={() => toggleSection('education')}
        />
        {expandedSections.education && (
          <div className="px-4 pb-4">
            <div className="space-y-4">
              {/* Education Items */}
              {education.map((ele, index) => (
                <Education 
                  key={index}
                  data={ele}
                  index={index}
                  onUpdate={updateEducation}
                  onRemove={removeEducation}
                />
              ))}
              
              {/* Add Button */}
              <button 
                onClick={addEducation}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                ADD EDUCATION
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Other sections */}
      <div className="border-b border-gray-100">
        <SectionHeader
          title="Experience"
          isExpanded={expandedSections.experience}
          onToggle={() => toggleSection('experience')}
        />
        {expandedSections.experience && (
          <div className="px-4 pb-4">
            <div className="space-y-4">
              {/* Experience Items */}
              {experience.map((ele, index) => (
                <Experience 
                  key={index}
                  data={ele}
                  index={index}
                  onUpdate={updateExperience}
                  onRemove={removeExperience}
                />
              ))}
              
              {/* Add Button */}
              <button 
                onClick={addExperience}
                className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                ADD EXPERIENCE
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-100">
        <SectionHeader
          title="Projects"
          isExpanded={expandedSections.projects}
          onToggle={() => toggleSection('projects')}
        />
      </div>

    <div className="border-b border-gray-100">
      <SectionHeader
        title="Skills"
        isExpanded={expandedSections.skills}
        onToggle={() => toggleSection('skills')}
      />
      {expandedSections.skills && (
        <div className="px-4 pb-4">
          {/* Skill tags grid */}
          <div className="flex flex-wrap gap-3">
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

          {/* Add Button */}
          <button 
            onClick={addSkill}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Skill
          </button>
        </div>
      )}
    </div>


    <div className="border-b border-gray-100">
      <SectionHeader
        title="Profile or portfolio URL"
        isExpanded={expandedSections.profileUrl}
        onToggle={() => toggleSection('profileUrl')}
      />
      {expandedSections.profileUrl && (
        <div className="px-4 pb-4">
          <input
            type="text"
            placeholder="Enter your profile or portfolio URL"
            value={personalInfo.profileUrl || ''}
            onChange={(e) => updatePersonalInfo('profileUrl', e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      )}
    </div>


      <div>
        <SectionHeader
          title="Add more details"
          isExpanded={expandedSections.moreDetails}
          onToggle={() => toggleSection('moreDetails')}
          isPremium={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;