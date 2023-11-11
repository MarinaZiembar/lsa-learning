import { levels } from '../data/levels';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

function Topics(props) {

    const {setScene, setTopic, level} = props;

    const [levelTopics, setLevelTopics] = useState();

    const handleClick = (topic) => {
        setScene('vocabulary');
        setTopic(topic);
    }

    useEffect(() => {
        setLevelTopics(levels.find((item) => item.level == level));
    },[])


    return (
        <div className="levelsContainer">
            {levelTopics?.topics?.map((topic, i) => (
                <Card 
                    type="category"
                    title={topic.title} 
                    key={i} 
                    onClick={() => handleClick(topic.title)}
                />
            ))}
            <Card 
                type="category"
                title="Todo" 
                onClick={() => handleClick("all")}
            />
        </div>
    );
}

export default Topics;
