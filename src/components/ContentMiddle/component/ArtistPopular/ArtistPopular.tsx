import React from 'react';
import './ArtistPopular.scss';

//@ts-ignore
import {popular} from '../ArtistPlaylist/popular.tsx';
//@ts-ignore
import {Popular} from '../Popular/Popular.tsx';
//@ts-ignore
import MainButton from '../../../../ui/MainButton/MainButton.tsx';

const ArtistPopular = () => {
  return (
    <div className="artistPopular">
      <div className="artistPopular__popular">
        <h5 className="artistPopular__popular--title">Popular</h5>
        <div className="artistPopular__popular--container">
          {
            popular.map(item => (
              <Popular
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
      </div>

      <div className="artistPopular__popular--button">
        <MainButton
          value='Show 5 more'
        />
      </div>
    </div>
  )
}

export default ArtistPopular
