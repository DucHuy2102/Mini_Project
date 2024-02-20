import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ numberOfStar }) => {
    const [move, setMove] = useState(0);
    const [clicked, setClicked] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setClicked(getCurrentIndex);
        // console.log('rating:', rating);
    };
    const handleMouseMove = (getCurrentIndex) => {
        setMove(getCurrentIndex);
        // console.log('hover:', hover);
    };
    const handleMouseLeave = () => {
        setMove(clicked);
        // console.log('hoverLeave:', hover);
    };

    const enable = 'text-yellow-500';
    const disable = 'text-black';

    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
            {[...Array(numberOfStar)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (move || clicked) ? `${enable}` : `${disable}`}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
