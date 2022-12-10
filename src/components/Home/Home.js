import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';
const Home = () => {
    const [search, setSearch] = useState("");
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => {
                setPlayers(data?.player);
            });
    }, [search]);


const handleDelete = (idPlayer) => {

}
    return (
        <div>
            <div className='home-container'>
                <div className='left-side'>
                    <input onChange={(event) => setSearch(event.target.value)} type="text" className='search-input' placeholder='Choose your sports' />
                    <button className='seatch-btn'>Search</button>
                    <div className='players-container'>
                        <Players
                            players={players}
                            cart={cart}
                            setCart={setCart}
                        ></Players>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='cart'>
                        {
                            cart.map(data =>
                                <div>
                                    <li>{data.strPlayer}</li>
                                    <button
                                    onClick={() => handleDelete(data.idPlayer)}
                                    ></button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;