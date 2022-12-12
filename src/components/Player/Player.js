import React from 'react';
import './Player.css';

const Player = ({ player, cart, setCart }) => {

    const { strNationality, strDescriptionEN, strPlayer, idPlayer, strCutout } = player;

    const handleAddtoCart = () => {

        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            
        };
        if(cart){
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }else{
            setCart([info])
            return;
        }
    }

    const handleBookmark = () => {

        const info = {
            strPlayer,
            idPlayer,
            strCutout,
            bookmark: "true",
        };
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookMark = JSON.parse(prevBookmark);

        if(oldBookMark){
            
            localStorage.setItem("bookmark", JSON.stringify([...oldBookMark, info]));
        }else{
            
            localStorage.setItem('bookmark', JSON.stringify([info]));
        }

    }

    return (
        <div className='card' data-aos="fade-up"
        data-aos-anchor-placement="center-center">

            <img className='player-img' src={strCutout} />
            <h4>{strPlayer}</h4>
            <p>
                {strDescriptionEN
                    ? strDescriptionEN?.slice(0, 50)
                    :
                    "slkdfj"
                }
            </p>
            <button onClick={ handleAddtoCart} className='card-btn'>Add to Cart</button>
            <button className='card-btn'>Details</button>
            <button onClick={handleBookmark} className='card-btn'>BookMark</button>
        </div>
    );
};

export default Player;