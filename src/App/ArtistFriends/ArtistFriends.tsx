import React from 'react';
import './ArtistFriends.scss';

//@ts-ignore
import MainButton from '../../ui/MainButton/MainButton.tsx';

//@ts-ignore
import {ListFriends} from '../../ui/ListFriends/ListFriends.tsx';

//@ts-ignore
import {names} from './names.tsx';

export const ArtistFriends: React.FC = (): JSX.Element => {
  return (
    <div className="artist-friends">
      <div className="artist-friends__wrapper">
        {
          names.map(item => (
            <ListFriends
            img={item.img}
            name={item.name}
          />
          ))
        }
      </div>
      <div className="artist-friends__button">
        <MainButton 
          value="Find Friends"
        />
      </div>
    </div>
  )
}
