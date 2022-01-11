import React from 'react';
import './ArtistInfo.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//@ts-ignore
import MainButton from '../../ui/MainButton/MainButton.tsx';
//@ts-ignore
import MainContainer from './component/ArtistPlaylist/ArtistPlaylist.tsx';
//@ts-ignore
import TabsContent from '../Tabs/TabsContent.tsx';
//@ts-ignore
import {artists} from './artists.ts';

export const ArtistInfo: React.FC = (): JSX.Element => {
  return (
    <div className="middle">
      <div className="middle__wrapp">
        <div className="middle__info">
          <div className="middle__img">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/g_eazy_propic.jpg" alt="G-Eazy" className="middle__photo"/>
            <span className="middle__img--icon material-icons">done</span>
          </div>
          <div className="middle__wrapper">
            <div className="middle__wrapper--meta">
              <div className="middle__wrapper middle__wrapper--type">Artist</div>
              <div className="middle__wrapper middle__wrapper--name">G-Eazy</div>
              <div className="middle__wrapper middle__wrapper--actions">
                <a href="/" className="middle__play-btn">
                  <i className="material-icons">play_arrow</i>
                  Play
                </a>
                <MainButton 
                  value='Follow'
                />
                <a href='/' className="middle__more-btn material-icons">more_horiz</a>
              </div>
            </div>
            <div className="middle__listeners">
              <div className="middle__listeners middle__listeners--count">15,662,810</div>
              <div className="middle__listeners middle__listeners--label">Monthly Listeners</div>
            </div>
          </div>
        </div>
        <div className="middle__tablists">
          <Tabs>
            <TabList className="middle__tablist">
              <div className="middle__tablist--wrapp">
                <Tab>Overview</Tab>
                <Tab>Related Artists</Tab>  
              </div>
              <div className="middle__friends">
                <a href="/" className="middle__friends middle__friends--first"> </a>
                <a href="/" className="middle__friends middle__friends--second"> </a>
                <a href="/" className="middle__friends middle__friends--third"> </a>
              </div>
            </TabList>
            <TabPanel>
              <MainContainer />
            </TabPanel>
            <TabPanel>
              <div className="middle__tablist middle__tablist--card">
                {
                  artists.map(item => (
                    <TabsContent
                      img={item.img}
                      name={item.name}
                    />
                  ))
                }
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
