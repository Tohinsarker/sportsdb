import React from 'react';
import './Home.css'; 
const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='left-side'>
                    <input type="text" className='search-input' placeholder='Choose your sports' />
                    <button className='seatch-btn'>Search</button>
                </div>
                <div className='right-side'>Cart</div>
            </div>
        </div>
    );
};

export default Home;