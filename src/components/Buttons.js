import React, {useState} from 'react';

function AccordionSection({ title, toggleSection, expanded, content}) {
  return (
    <div>
      <button onClick={() => toggleSection(title)}>{title}</button>
      {expanded && (
        <div className="accordion-content">
          {content} 
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
        content={<p>'ate me code, 'ate me c'mputahs, luv me crisps. Simple as. </p>}
      />
      <AccordionSection 
        title="Piano Man" 
        toggleSection={toggleSection} 
        expanded={expandedSection === 'Piano Man'} 
        content={<p>prette shite at piano init</p>}
      />
    </div>
    </>
  )
}