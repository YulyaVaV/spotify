import React, { useState } from 'react';

import './TabCard.scss';
import './TabsReact.scss';

interface Props {
  img: any, 
  name: string,
}

export const CardContent: React.FC<Props> = ({img, name}): JSX.Element =>  {
  const [isHover, setIsHover] = useState(false);
  
  const isPhotoHover = ()  => {
    if (isHover) {
      return (
        <div>
          <span className="card__play material-icons">play_arrow</span>
        </div>
        )
      }
    }

  return (
    <div className="card">
      <div
        onMouseLeave={() => setIsHover(false)}
        onMouseEnter={() => setIsHover(true)}
      >
        {isPhotoHover()}
        <img src={img} alt="" className="card__img" />
      </div>
      <a href="/" className="card__name">{name}</a>
    </div>
  )
}

export default CardContent
