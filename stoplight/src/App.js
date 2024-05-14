import React, { useState } from 'react';
import Stoplight from './Stoplight_V1';
import ConfigurableStoplight from './Stoplight_V2';
import { configurations } from './light_configurations';

function App() {
  const [solutionVersion, setSolutionVersion] = useState('Ver1')

  return (
    <div className="App">
      <select onChange={(e) => { console.log(e.target.value); setSolutionVersion(e.target.value) }}>
        <option key="Ver1" value="Ver1">Version 1</option>
        <option key="Ver2" value="Ver2">Version 2</option>
      </select>
      <div>
        {solutionVersion === 'Ver1' && <Stoplight />}
        {solutionVersion === 'Ver2' && <ConfigurableStoplight configurations={configurations} />}
      </div>
    </div>
  );
}

export default App;