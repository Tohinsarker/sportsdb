import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Players from '../Players/Players';
import './Home.css';
import Swal from 'sweetalert2'


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


    const handleDelete = (id) => {
        const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
        setCart(leftPlayer);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
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
                            cart?.map(data =>
                                <div className='cart-info-container'>

                                    <li>{data.strPlayer}</li>
                                    <button className='delete-btn'
                                        onClick={() => handleDelete(data.idPlayer)}
                                    >X</button>
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