import { useState } from 'react';

const ChocolateCard = ({chocolate}) => {
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="chocolate-card">
            <img src={chocolate.image} alt={chocolate.name} />
            <h2>{chocolate.name}</h2>
            <button onClick={handleCardClick}>View Details</button>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{chocolate.name}</h2>
                        <p>{chocolate.description}</p>
                        <p className="modal-calories">Calories: {chocolate.calories}</p>
                        <p className="modal-ingredients">Ingredients:</p>
                        <ul className="ingredients-list">
                            {chocolate.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ChocolateCard;