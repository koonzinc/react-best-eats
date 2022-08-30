import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto'>
            <div>
                <div>
                    <AiOutlineMenu size={30} />
                </div>
                <h1>
                    Best <span>Eats</span>
                </h1>
                <div>
                    <p>Delivery</p>
                    <p>Pickup</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar