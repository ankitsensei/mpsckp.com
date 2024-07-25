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
    className: 'bg-red-500 w-40 h-10',
};

export default Btn;
