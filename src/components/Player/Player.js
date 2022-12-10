import React from 'react';
import './Player.css';

const Player = ({ player, cart, setCart }) => {

    const { strNationality, strDescriptionEN, strPlayer, idPlayer, strCutout } = player;

    const handleAddtoCart = () => {

        const info = {
            strPlayer,
            idPlayer,
            strCutout
        };
        if(cart){
            const newPlayer = [...cart, info];
            setCart(newPlayer);
        }else{
            setCart([info])
            return;
        }
       
       

    }

    console.log(cart);
    return (
        <div className='card'>

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
            <button className='card-btn'>BookMark</button>
        </div>
    );
};

export default Player;