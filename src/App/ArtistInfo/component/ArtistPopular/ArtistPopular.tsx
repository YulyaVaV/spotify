import React from 'react';
import './ArtistPopular.scss';

//@ts-ignore
import {popular} from '../ArtistPlaylist/popular.tsx';
//@ts-ignore
import {PopularItem} from '../../../../ui/PopularItem/PopularItem.tsx';
//@ts-ignore
import MainButton from '../../../../ui/MainButton/MainButton.tsx';

const ArtistPopular = () => {
  return (
    <div className="artist-popular">
      <h5 className="artist-popular__title">Popular</h5>
      <div className="artist-popular__container">
        {
          popular.map(item => (
            <PopularItem
              img={item.img} 
              id={item.id} 
              name={item.name}  
              icon={item.icon} 
              explicit={item.explicit} 
              number={item.number}
            />
          ))
        }
      </div>
      <div className="artist-popular__button">
        <MainButton
          value='Show 5 more'
        />
      </div>
    </div>
  )
}

export default ArtistPopular
