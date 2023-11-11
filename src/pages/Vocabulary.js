
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { levels } from '../data/levels';
import Button from '../components/Button';
import arrow from '../img/back.svg';

function Vocabulary(props) {

    const {level, setScene, topic} = props;

    const [word, setWord] = useState();
    
    const wordRandomizer = (level, topic = "all") => {
        const selectedLevel = levels.find((item) => item.level == level);
        if(topic == "all"){
            const topicIndex = Math.floor(Math.random() * selectedLevel?.topics?.length);
            const selectedTopic = selectedLevel?.topics[topicIndex];
            if(selectedTopic?.content){
                const wordIndex = Math.floor(Math.random() * selectedTopic?.content?.length);
                setWord(selectedTopic?.content[wordIndex]);
            }else{
                const randomNumber = Math.floor(Math.random() * 100);
                setWord(randomNumber);
            }
        }else{
            const selectedTopic = selectedLevel?.topics.find((item) => item.title == topic);
            if(selectedTopic?.content){
                const wordIndex = Math.floor(Math.random() * selectedTopic?.content?.length);
                setWord(selectedTopic?.content[wordIndex]);
            }else{
                const randomNumber = Math.floor(Math.random() * 100);
                setWord(randomNumber);
            }
        }
        
    }

    useEffect(() => {
        wordRandomizer(level, topic);
    },[])

    return (
        <div className="levelsContainer">
            <div className='word-container'>
                <Card 
                    type="word"
                    title={word} 
                />
            </div>
            <div className='btn-container'>
                <Button
                    title="Nueva palabra"
                    onClick={() => wordRandomizer(level, topic)}
                />
            </div>
            <img
                src={arrow}
                className='backButton'
                onClick={() => setScene('categories')}
            />
        </div>
    );
}

export default Vocabulary;
