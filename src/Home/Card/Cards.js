import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image1 from '../../media/home-picture-1.png';
import Image2 from '../../media/home-picture-2.png';
import Image3 from '../../media/home-picture-3.jpg';
import Image4 from '../../media/home-picture-4.jpg';
import Image5 from '../../media/home-picture-5.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out some HAPPINESS ranking features!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Image1}
                            text='Explore the happiness ranking by Health score'
                            label='Health'
                            path='/factors'
                        />
                        <CardItem
                            src={Image2}
                            text='Explore the happiness ranking by Trust score'
                            label='Trust'
                            path='/factors'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={Image3}
                            text='Explore the happiness ranking by Freedom score'
                            label='Freedom'
                            path='/factors'
                        />
                        <CardItem
                            src={Image4}
                            text='Explore the happiness ranking by Family score'
                            label='Family'
                            path='/facotrs'
                        />
                        <CardItem
                            src={Image5}
                            text='Explore the happiness ranking by Generosity score'
                            label='Generosity'
                            path='/factors'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
