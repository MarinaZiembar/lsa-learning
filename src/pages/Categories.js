
import {categories} from '../data/categories';
import Card from '../components/Card';

function Categories(props) {

    const {setScene} = props;

    const handleClick = (category) => {
        setScene(category == "vocabulary" ? "topics" : category)
    }

    return (
        <div className="levelsContainer">
            {categories.map((category, i) => (
                <Card 
                    type="category"
                    title={category.label} 
                    key={i} 
                    onClick={() => handleClick(category.value)}
                />
            ))}
        </div>
    );
}

export default Categories;
