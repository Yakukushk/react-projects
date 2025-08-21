import React, { useState } from 'react';
import './App.css';

import CoreConcept from './components/CoreConcept';

import TabButton from './components/Tab';
import Header from 'components/Header';
import { CORE_CONCEPTS, EXAMPLES } from 'data/data';
import CodeFragment from 'components/CodeFragment';

type TopicType = 'components' | 'jsx' | 'props' | 'state';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<TopicType>('components');
  
  function handleSelect(selectedButton: TopicType): void {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log(EXAMPLES[selectedTopic]);

  return (
    <div className="container mx-auto">
      <Header title="React" />
      <section>
        <CoreConcept data={CORE_CONCEPTS} />
      </section>
      <section id="examples">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
          </div>
          <div className="border-2 border-dotted border-gray-300 rounded-lg p-4 mt-4">
            {selectedTopic && <p className="text-gray-500 dark:text-gray-400 text-xl text-center whitespace-pre-wrap">{EXAMPLES[selectedTopic].description}</p>}
            {selectedTopic && <CodeFragment code={EXAMPLES[selectedTopic].code} />}
          </div>
        </section>
    </div>
  );
}

export default App;
