import React, { useState } from 'react';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';
import Document from './components/Document';

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ]);

  return (
    <>
      <Topbar />
      <div className='flex min-h-screen'>
        <SideBar
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          professionalSummary={professionalSummary}
          setProfessionalSummary={setProfessionalSummary}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          projects={projects}
          setProjects={setProjects}
          skills={skills}
          setSkills={setSkills}
        />
        <Document 
          personalInfo={personalInfo}
          professionalSummary={professionalSummary} 
          education={education}
          skills={skills}
          experience={experience}
          projects={projects}
        />
      </div>
    </>
  );
}

export default App;