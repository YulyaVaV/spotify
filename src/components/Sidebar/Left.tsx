import React from 'react';
//@ts-ignore
import { MainDropdown } from './component/MainDropdown/MainDropdown.tsx';
import './Left.scss';

//@ts-ignore
import {lists} from './component/lists.tsx';
//@ts-ignore
import CurrentPlayback from './component/CurrentPlayback/CurrentPlayback.tsx';
//@ts-ignore
import MenuButton from './component/MenuButton/MenuButton.tsx';

export const Left: React.FC = (): JSX.Element => {
  return (
    <div className="left">
      <section className="left__navigation">
        <div className="left__wrapper">
          {
            lists.map(item => (
              <MainDropdown
                name={item.name}
                items={item.items}
              />
            ))
          }
        </div>
      </section>
      <MenuButton />
      <CurrentPlayback />
    </div>
  )
}
