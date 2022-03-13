import React from 'react';

export interface Props {
    points: Array<string | never>,
    setPoint: React.Dispatch<React.SetStateAction<string[]>>,
}
