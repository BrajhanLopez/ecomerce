import React from 'react';
import '../styles/loading.css';

const Loading = () => {
    return (
        <div className='overlay'>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default Loading;