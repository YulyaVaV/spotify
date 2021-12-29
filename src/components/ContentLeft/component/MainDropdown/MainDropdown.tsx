import React, { useEffect, useState } from 'react';
//@ts-ignore
import { Lists } from '../Lists/Lists.tsx';
import './MainDropdown.scss';

interface Props {
  name: string,
  items: any,
}

export const MainDropdown: React.FC<Props> = ({name, items}): JSX.Element => {
  const [isActive, setIsActive] = useState(true);
  const [width, setWidth] = useState(0);

  const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
  };

 useEffect(() => {
     window.addEventListener('resize', updateWindowDimensions);

     if (width < 920) {
       setIsActive(false)
     } else {
       setIsActive(true)
     }

  }, [width]);
 
  return (
    <div className="maindrop">
      <div
        className="maindrop__title"
        onClick={() => setIsActive(prev => !prev)}
      >
        <h5 className="maindrop__name">{name}</h5>
        <span className={`maindrop__icon material-icons ${isActive ? 'rotate' : ''}`}>expand_less</span>
      </div>
      
      <div className={`maindrop__wrapper ${isActive ? 'open' : ''}`}>
        {
          items.map(item => (
            <Lists {...item}/>
          ))
        }
      </div>
    </div>
  )
}
