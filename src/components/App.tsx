import React, { useState } from 'react';
import PointsContainer from './PointsContainer';

function App() {
  const [points, setPoint] = useState<Array<string>>([]);
  return (
    <div>
      <PointsContainer points={points} setPoint={setPoint} />
    </div>
  );
}

export default App;
