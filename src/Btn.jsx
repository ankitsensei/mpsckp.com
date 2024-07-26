import React from 'react';

function Btn({ title, className }) {
    return (
        <div>
            <button className={className}>{title}</button>
        </div>
    );
}

Btn.defaultProps = {
    title: 'click',
    className: 'bg-zinc-50 text-zinc-950 w-24 h-10 outline-none rounded-lg',
};

export default Btn;
