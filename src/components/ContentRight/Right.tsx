import React from 'react';
//@ts-ignore
import MainButton from '../../ui/MainButton/MainButton.tsx';

//@ts-ignore
import {List} from './component/List.tsx';
import './Right.scss';

//@ts-ignore
import {names} from './component/names.tsx';

export const Right: React.FC = (): JSX.Element => {
  return (
    <div className="right">
      <div className="right__wrapper">
        {
          names.map(item => (
            <List
            img={item.img}
            name={item.name}
          />
          ))
        }
      </div>
      <div className="right__button">
        <MainButton 
          value="Find Friends"
        />
      </div>
    </div>
  )
}
