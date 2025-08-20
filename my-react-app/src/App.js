import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data/data';
import TabButton from './components/Tab';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }


  return (
    <div className="container mx-auto">
      <Header title="React" />
      <section>
        <CoreConcept data={CORE_CONCEPTS} />
      </section>
      <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {selectedTopic && <p>{EXAMPLES[selectedTopic].description}</p>}
        </section>
    </div>
  );
}

export default App;
