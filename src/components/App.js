import React, {useState} from "react";
import Resume from "./resume/Resume";
import Navbar from "./Navbar";
import Title from "./Title";

function AccordionSection({ title, sectionId, toggleSection, expanded, content}) {
  return (
    <div>
      <button onClick={() => toggleSection(sectionId)}>{title}</button>
      {expanded && (
        <div className="accordion-content">
          {content} 
        </div>
      )}
    </div>
  );
}

export default function App({resdata})
{
  const [expandedSection, setExpandedSection] = useState(null); // Track expanded section

  const toggleSection = (sectionId) => {
    setExpandedSection(sectionId === expandedSection ? null : sectionId);
  };

  return(
    <>
    <div>
      <AccordionSection 
        title="Section 1"
        sectionId="section1" 
        toggleSection={toggleSection} 
        expanded={expandedSection === 'section1'} 
        content={<p>sup bitch</p>}
      />
      <AccordionSection 
        title="Section 2" 
        sectionId="section2" 
        toggleSection={toggleSection} 
        expanded={expandedSection === 'section2'} 
        content={<p>oiz propuh chuffed</p>}
      />
    </div>


      <Title /> 
      <Navbar />
      {/*<Resume resdata={resdata}/> */}
    </>
  )
}

