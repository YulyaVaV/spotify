import React from 'react';
//@ts-ignore
import { MainDropdown } from './component/MainDropdown/MainDropdown.tsx';
import './Left.scss';

//@ts-ignore
import {lists} from './component/lists.tsx';

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

      <section className="left__playlist">
         <a href="/" className="left__playlist--add">
          <span className="left__playlist--icon material-icons">add_circle_outline</span>
          <span className="left__playlist--playlist">New Playlist</span>
         </a>
      </section>

      <section className="left__playing">
        <div className="left__playing--art">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/cputh.jpg" alt="Album Art" className="left__playing--img"/>
        </div>
        <div className="left__playing--song">
          <a href="/" className="left__playing--name">Some Type of Love</a>
          <a href="/" className="left__playing--artist">Charlie Puth</a>
        </div>
        <div className="left__playing--add">
          <i className="material-icons">done</i>
        </div>
      </section>
    </div>
  )
}
