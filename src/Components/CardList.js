import React from 'react';
import Card from './Card';

const CardList = ({restaurants}) => {
    
    const cardComponent = restaurants.map((user,i) =>{
        return <Card 
            key={i} 
            id={restaurants[i].id} 
            name={restaurants[i].name} 
            picture={restaurants[i].picture}
        />
    });
    
    return(
        <div>
            {cardComponent}
        </div>
    );
}


export default CardList;