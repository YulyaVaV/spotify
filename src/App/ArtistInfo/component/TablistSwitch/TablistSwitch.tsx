import React from 'react';
import './TablistSwitch.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

//@ts-ignore
import MainContainer from '../ArtistPlaylist/ArtistPlaylist.tsx';
//@ts-ignore
import TabsContent from '../../../TabCard/TabCard.tsx';
//@ts-ignore
import {artists} from '../../artists.ts';
//@ts-ignore
import ArtistFriends from '../../../../ui/ArtistFriend/ArtistFriends.tsx';

const TablistSwitch = () => {
 return (
    <div className="tablist-switch">
      <Tabs>
        <TabList className="tablist-switch__wrapp">
          <div className="tablist-switch__titles">
            <Tab>Overview</Tab>
            <Tab>Related Artists</Tab>  
          </div>

          <ArtistFriends />

        </TabList>
        <TabPanel>
          <MainContainer />
        </TabPanel>
        <TabPanel>
          <div className="tablist-switch__cards">
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
  )
}

export default TablistSwitch
