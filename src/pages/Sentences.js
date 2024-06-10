import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { levels } from '../data/levels';
import Button from '../components/Button';
import arrow from '../img/back.svg';

function Sentences(props) { 
    
    const {level, setScene} = props;

    const [sentence, setSentence] = useState([]);

    const sentenceRandomizer = (level) => {
        let words = [];
        if(level == 1){
            for (let index = 0; index < 6; index++) {
                const selectedLevel = levels.find((item) => item.level == level);
                const topicIndex = Math.floor(Math.random() * selectedLevel?.topics?.length);
                const selectedTopic = selectedLevel?.topics[topicIndex];
                if(selectedTopic.title == "oraciones"){
                    words = selectedTopic.content;
                }else{
                    if(selectedTopic?.content){
                        const wordIndex = Math.floor(Math.random() * selectedTopic?.content?.length);
                        words = [...words, selectedTopic?.content[wordIndex]];
                    }else{
                        const randomNumber = Math.floor(Math.random() * 100);
                        words = [...words, randomNumber];
                    }
                }
            }
           setSentence(words);
        }else{
            const selectedLevel = levels?.find((item) => item.level == level);
            const selectedTopic = selectedLevel?.topics.find((item) => item.title == "Oraciones");
            const selectedContent = selectedTopic?.content;
            const selectedSentenceIndex = Math.floor(Math.random() * selectedContent?.length);
            setSentence([selectedContent[selectedSentenceIndex]]);
        }
    }

    useEffect(() => {
        sentenceRandomizer(level);
    },[])


    return (
        <div className="levelsContainer">
            <img
                src={arrow}
                className='backButton'
                onClick={() => setScene('categories')}
            />
            <div className='word-container'>
                {sentence?.map((word,i) => (
                    <Card 
                        key={i}
                        type="word"
                        title={word} 
                    />
                ))}
            </div>
            <div className='btn-container'>
                <Button
                    title="Nuevas palabras"
                    onClick={() => sentenceRandomizer(level)}
                />
            </div>
        </div>
    );
}

export default Sentences;
