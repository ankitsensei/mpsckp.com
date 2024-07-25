import React from 'react';
import Btn from './Btn';

function NavBar() {
    return (
        <div>
            <nav className='flex justify-between px-10'>
                <h1>mpsckp</h1>
                <ul className='flex gap-2'>
                    <Btn />
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
