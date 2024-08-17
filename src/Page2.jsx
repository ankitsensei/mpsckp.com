import React from 'react';
import Btn from './Btn';
function Page2() {
    return (
        <div className='w-full h-[50vh] bg-red-800'>
            <div className='flex justify-between px-10 py-10'>
                <div className='w-1/2 text-9xl font-semibold text-yellow-500 flex justify-center items-center'>
                    NOTICE
                </div>
                <div className='flex flex-wrap  gap-10 w-1/2 '>
                    <button className='bg-yellow-500 w-56 h-40 rounded-lg'>
                        <a href='#'>MISSION</a>
                        <p>STATEMENT</p>
                    </button>
                    <button className='bg-yellow-500 w-56 h-40 rounded-lg'>
                        <a href='#'>ANNUAL</a>
                        <p>REPORT</p>
                    </button>
                    <button className='bg-yellow-500 w-56 h-40 rounded-lg'>
                        <a href='#'>OASIS</a>
                        <p>FINAL REPORT</p>
                    </button>
                    <button className='bg-yellow-500 w-56 h-40 rounded-lg'>
                        <a href='#'>TC/SLC</a>
                        <p>DOWNLOAD</p>
                    </button>
                    <button className='bg-yellow-500 w-56 h-40 rounded-lg'>
                        <a href='#'>MANDATORY</a>
                        <p>PUBLIC DISCLOSURE</p>
                    </button>
                    <button className='bg-yellow-500 w-56 h-40 rounded-lg'>
                        <a href='#'>STUDENT</a>
                        <p>ARENA</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page2;
