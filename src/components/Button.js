
function Button(props) {

    const {title, onClick} = props;

    return (
        <div 
            className="btn-primary"
            onClick={onClick}
        >
            <p>{title}</p>
        </div>
    );
}

export default Button;
