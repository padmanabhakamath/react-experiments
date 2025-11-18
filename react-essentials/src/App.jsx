import { useState } from 'react'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton.jsx';


function App() {

  // setSelectedTopic is a FUNCTION
  // selectedTopic is a VALUE
  // argument to useState is the INITIAL VALUE OF SELECTEDTOPIC
  const [selectedTopic, setSelectedTopic] = useState('Please click a button'); // Must be called directly inside 

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'JSX', 'props', 'state'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
  }

  console.log('App component executing')

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept concept={CORE_CONCEPTS[0]}/>
            <CoreConcept concept={CORE_CONCEPTS[1]}/>
            <CoreConcept concept={CORE_CONCEPTS[2]}/>
            <CoreConcept concept={CORE_CONCEPTS[3]}/>
          </ul>          
        </section>   
        <section id="examples">
          <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>   
            {selectedTopic}       
        </section>
      </main>
    </div>
  );
}

export default App;