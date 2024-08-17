import React from 'react';
import NavBar from './NavBar.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';

function App() {
    return (
        <div className='bg-zinc-900 w-full h-screen text-zinc-50'>
            <NavBar />
            <Page1 />
            <Page2 />
        </div>
    );
}

export default App;
