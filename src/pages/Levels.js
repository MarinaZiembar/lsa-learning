import { useState } from 'react';
import {levels} from '../data/levels';
import Card from '../components/Card';

function Levels(props) {

    const {setLevel, setScene} = props;

    const handleClick = (level) => {
        setLevel(level.level);
        setScene('categories');
    }

    return (
        <div className="levelsContainer">
            {levels.map((level,i) => (
                <Card 
                    type="level"
                    title={`Nivel ${level.level}`} 
                    key={i} 
                    onClick={() => handleClick(level)}
                />
            ))}
        </div>
    );
}

export default Levels;
