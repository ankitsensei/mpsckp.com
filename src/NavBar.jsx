import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Btn from './Btn';
import MainLogo from './assets/imgs/mpslogo.webp';

function NavBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='relative select-none'>
            <nav className='flex justify-between items-center px-10 py-5 bg-[#ffb22c]'>
                <div className='flex items-center gap-4 select-none'>
                    <img className='w-40 h-14' src={MainLogo} alt='#' />
                </div>

                <button
                    className='relative flex items-center px-4 justify-between bg-[#FFDE4D] text-white w-48 h-10 rounded-lg hover:bg-[#FFB22C] active:bg-[#c7ae3f] select-none'
                    onClick={toggleMenu}
                >
                    <span>Menu</span>
                    <FontAwesomeIcon
                        className='text-white ml-2'
                        icon={faCaretDown}
                    />
                </button>
                {menuVisible && (
                    <div className='absolute right-10 top-16 flex flex-col w-48 border-zinc-900 bg-[#FFB22C] text-gray-800 rounded-lg shadow-lg z-50'>
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
