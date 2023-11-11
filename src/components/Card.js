
function Card(props) {

    const {title, type, onClick} = props;

    return (
        <div 
            className={type == "level" ? "card-level" : type == "category" ? "card-category" : "card-vocabulary"}
            onClick={onClick || undefined}
        >
            <p>{title}</p>
        </div>
    );
}

export default Card;
