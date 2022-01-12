import React from 'react';
//@ts-ignore
import { MainDropdown } from './component/MainDropdown/MainDropdown.tsx';
import './Sidebar.scss';

//@ts-ignore
import {lists} from './component/lists.tsx';
//@ts-ignore
import CurrentPlayback from '../../ui/CurrentPlayback/CurrentPlayback.tsx';
//@ts-ignore
import MenuButton from '../../ui/MenuButton/MenuButton.tsx';

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className="sidebar">
      <section className="sidebar__navigation">
        <div className="sidebar__wrapper">
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
