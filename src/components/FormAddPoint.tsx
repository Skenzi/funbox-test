import React, { useState } from 'react';
import { Props } from '../types/types';

function FormAddPoint({ points, setPoint }: Props) {
  const [newPoint, setNewPoint] = useState<string>('');
  return (
    <form onSubmit={(ev) => {
        ev.preventDefault();
        setPoint([...points, newPoint]);
    }}>
      <input type="text" value={newPoint} onChange={(ev) => setNewPoint(ev.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default FormAddPoint;
