import React from 'react';

import './MainContainer.scss';
//@ts-ignore
import {ReleatedArtists} from '../ReleatedArtists/ReleatedArtists.tsx';
//@ts-ignore
import {Popular} from '../Popular/Popular.tsx';
//@ts-ignore
import Button from '../../../../ui/Button/Button.tsx';
//@ts-ignore
import { Songs } from '../Songs/Songs.tsx';
//@ts-ignore
import {artist} from './artist.ts';
//@ts-ignore
import {songs} from './songs.tsx';
//@ts-ignore
import {popular} from './popular.tsx'


const MainContainer: React.FC = (): JSX.Element => {
  return (
    <div className="mainContainer">
      <div className="mainContainer__wrapper">
        <div className="mainContainer__overview">
          <div className="mainContainer__latest">
            <h5 className="mainContainer__latest--title">LATEST RELEASE</h5>
            <div className="mainContainer__track">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="mainContainer__track--img"/>
              <div className="mainContainer__track--song">
                <p className="mainContainer__track--name">Drifting (Track Commentary)</p>
                <p className="mainContainer__track--data">4 December 2015</p>
              </div>
            </div>
          </div>    
          
          <div className="mainContainer__popular">
            <h5 className="mainContainer__popular--title">Popular</h5>
            <div className="mainContainer__popular--container">
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
          <div className="mainContainer__popular--button">
            <Button 
              value='Show 5 more'
            />
          </div>
        </div>
        
        <div className="mainContainer__releated">
          <h5 className="mainContainer__latest--title">RELEATED ARTISTS</h5>
          <div className="mainContainer__artists">
            {
              artist.map(item => (
                <ReleatedArtists
                  img={item.img}
                  name={item.name}
                />
              ))
            }
          </div>
        </div>
      </div>

      <div className="mainContainer__albums">
        <div className="mainContainer__head">
          <h6 className="mainContainer__head--title">ALBUMS</h6>
          <div className="mainContainer__head--icons">
          <i className="mainContainer__head--icon mainContainer__head--other material-icons">format_list_bulleted</i>
          <i className="mainContainer__head--icon mainContainer__head--another material-icons">grid_view</i>
          </div>
        </div>
        <div className="mainContainer__albums--info">
          <div >
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" className="mainContainer__albums--image"/>
          </div>
          <div className="mainContainer__albums--meta">
            <p className="mainContainer__albums--year">2015</p>
            <h2 className="mainContainer__albums--title">When It's Dark Out</h2>
            <div className="mainContainer__albums--buttons">
            <Button
              value="SAVE"
            />
              <a href='/' className="middle__button--more material-icons">more_horiz</a>
            </div>
          </div>
        </div>

        <div className="mainContainer__songs">
          <div className="mainContainer__songs--wrapper">
            <div className="mainContainer__songs--song">
              <p className="mainContainer__songs--grate">#</p>
              <h6 className="mainContainer__songs--title">SONG</h6>
            </div>
            <div className="mainContainer__songs--icons">
              <i className="material-icons">timer</i>
              <i className="mainContainer__songs--icon material-icons">thumb_up_alt</i>
            </div>
          </div>
          <div className="mainContainer__songs--content">
            {
              songs.map(item => (
                <Songs
                  id={item.id}
                  icon={item.icon}
                  name={item.name}
                  explicit={item.explicit}
                  time={item.time}
                  arrow={item.arrow}
                  artist={item.artist} 
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContainer;
