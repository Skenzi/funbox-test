import React from 'react';
import FormAddPoint from './FormAddPoint';
import ListPoints from './ListPoints';
import { Props } from '../types/types';

function PointsContainer({ points, setPoint }: Props) {
  return (
    <div>
      <FormAddPoint points={points} setPoint={setPoint} />
      <ListPoints points={points} />
    </div>
  );
}

export default PointsContainer;
