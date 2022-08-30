import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

            {/*Left Side*/}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:'>
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