import React from "react";
import Point from "./Point";

const ListPoints = ({ points }: { points: Array<string>}) => {
    return <ul>
        {points.map((point) => {
            return <Point key={point} point={point} />
        })}
    </ul>
};

export default ListPoints;
