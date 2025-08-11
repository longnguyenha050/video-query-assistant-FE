import { Card } from 'antd';
import React from 'react';

const ListCard = () => {

    const items = [
        { title: 'Card 1', src: 'https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png' },
        { title: 'Card 2', src: 'https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png' },
        { title: 'Card 3', src: 'https://pluspng.com/img-png/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png' },
    ];
    return (
        <div>
            {items.map(item => (
                <Card img={item} />
            ))
            }
        </div>
    );
}

export default ListCard;
