

const CardNotification = ({item}) => {
    const {Titles} = item
    return (
        <div className="shadow-xl rounded-2xl py-2 px-3" >
            <h2>{Titles}</h2>
            
        </div>
    );
};

export default CardNotification;