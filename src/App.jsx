import React, { useState } from 'react';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';
import Document from './components/Document';
import Skill from './components/Skill';


function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [professionalSummary, setProfessionalSummary] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ]);

  return (
    <>
      <Topbar />
      <div className='flex'>
        <SideBar
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          professionalSummary={professionalSummary}
          setProfessionalSummary={setProfessionalSummary}
          education={education}
          setEducation={setEducation}
          experience={experience}
          setExperience={setExperience}
          skills={skills}
          setSkills={setSkills}
        />
        <Document 
          personalInfo={personalInfo}
          professionalSummary={professionalSummary} 
          education={education}
          skills={skills}
          experience={experience}
        />

      </div>
    </>
  );
}

export default App;
