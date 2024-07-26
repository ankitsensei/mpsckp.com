import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Btn from './Btn';

function NavBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='relative'>
            <nav className='flex justify-between items-center px-10 py-5 bg-gray-600'>
                <h1 className='text-white text-xl font-semibold'>mpsckp</h1>
                <button
                    className='relative flex items-center px-4 justify-between bg-gray-700 text-white w-48 h-10 rounded-lg hover:bg-gray-600 active:bg-gray-500 select-none'
                    onClick={toggleMenu}
                >
                    <span>Menu</span>
                    <FontAwesomeIcon
                        className='text-white ml-2'
                        icon={faCaretDown}
                    />
                </button>
                {menuVisible && (
                    <div className='absolute right-10 top-16 flex flex-col w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50'>
                        <ul id='menuItems' className='flex flex-col py-2'>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Home</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>About Us</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Academic</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Admission</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Facility</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Faculty</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Result</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Gallery</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Join Us</a>
                            </li>
                            <li className='px-4 py-2 hover:bg-gray-200'>
                                <a href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
