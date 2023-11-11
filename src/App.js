import { useState } from 'react';
import './App.css';
import home from './img/home.svg';
import Levels from './pages/Levels';
import Categories from './pages/Categories';
import Vocabulary from './pages/Vocabulary';
import Sentences from './pages/Sentences';
import Topics from './pages/Topics';

function App() {

  const [scene, setScene] = useState('levels');
  const [level, setLevel] = useState();
  const [topic, setTopic] = useState();

  const handleHome = () => {
    setScene('levels');
    setTopic('');
    setLevel('');
  }

  return (
    <div className="App">
      <div className='contentContainer'>
        {scene == 'levels' &&
          <Levels 
            setLevel={setLevel}
            setScene={setScene}
          />
        }
        {scene == "categories" && 
          <Categories
            setScene={setScene}
          />
        }

        {scene == "topics" && 
          <Topics
            setScene={setScene}
            setTopic={setTopic}
            level={level}
          />
        }
        
        {scene == "vocabulary" && 
          <Vocabulary
            setScene={setScene}
            level={level}
            topic={topic}
          />
        }
        {scene == "sentences" && 
          <Sentences
            setScene={setScene}
            level={level}
          />
        }
      </div>
      <img 
        src={home} 
        className="button" 
        alt="Home" 
        onClick={() => handleHome()}
      />
    </div>
  );
}

export default App;
