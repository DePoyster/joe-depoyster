import React, {useState} from 'react';
import Sheet from "./Sheet";

function AccordionSection({ title, toggleSection, expanded, content}) {
  return (
    <div>
      <button className = "button" onClick={() => toggleSection(title)}>{title}</button>
      {expanded && (
        <div className="accordion-content">
          <Sheet content = {content}/> 
        </div>
      )}
    </div>
  );
}

export default function Buttons()
{
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (title) => {
    setExpandedSection(title === expandedSection ? null : title);
  };

  return(
    <>
    <div className={"Buttons"}>
      <AccordionSection 
        title="Software Guy"
        toggleSection={toggleSection} 
        expanded={expandedSection === 'Software Guy'} 
        content="'ate me code, 'ate me c'mputahs, luv me crisps. Simple as."
      />
      <AccordionSection 
        title="Piano Man" 
        toggleSection={toggleSection} 
        expanded={expandedSection === 'Piano Man'} 
        content="prette shite at piano init"
      />
    </div>
    </>
  )
}