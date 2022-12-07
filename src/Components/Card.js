import React from 'react';

const Card = ({id,name,picture}) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img 
                alt='restaurants pic' 
                src={picture}
                width="200" 
                height="200" 
            />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;