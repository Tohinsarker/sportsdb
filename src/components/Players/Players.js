import React from 'react';
import Player from '../Player/Player';
import './Players.css';
const Players = ({ players, cart, setCart }) => {

    return (
        <div>

            <div className='card-container'>
                {
                    players.map(player => <Player

                        key={player.idPlayer}
                        player={player}
                        cart = {cart}
                        setCart={setCart}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;