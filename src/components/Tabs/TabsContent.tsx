import React, { useState } from 'react';

import './Tabs.scss';
import './Tablist.scss';

interface Props {
  img: any, 
  name: string,
}

export const TabsContent: React.FC<Props> = ({img, name}): JSX.Element =>  {
  const [isHover, setIsHover] = useState(false);
  
  const isPhotoHover = ()  => {
    if (isHover) {
      return (
        <div className="tabs__hover">
          <span className="tabs__play material-icons">play_arrow</span>
        </div>
        )
      }
    }

  return (
    <div className="tabs">
      <div
        onMouseLeave={() => setIsHover(false)}
        onMouseEnter={() => setIsHover(true)}
      >
        {isPhotoHover()}
        <img src={img} alt="" className="tabs__img" />
      </div>
      <a href="/" className="tabs__name">{name}</a>
    </div>
  )
}

export default TabsContent
