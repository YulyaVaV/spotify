import React, { useState } from 'react';
//@ts-ignore
import { User } from './component/User/User.tsx';
import './Header.scss';

//@ts-ignore
import {data} from './component/data.ts';

export const Header: React.FC = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="header">
      <div className="header__wrapp">
        <div className="header__arrows">
          <span className="header__arrows header__arrows--left material-icons">arrow_back_ios</span>
          <span className="header__arrows header__arrows--right material-icons">arrow_forward_ios</span>
        </div>
        <input type="text" placeholder="Search" className="header__search"/>
      </div>

      <div className="header__user">
        <i className='material-icons header__notif'>notifications</i>
        <i className='material-icons header__archive'>archive</i>
        <div className="header__info">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg"
            alt="Profile"
            className="header__img" 
          />
          <h4 className="header__name">Adam Lowenthal</h4>
          <i 
            className='material-icons header__down'
            onClick={() => setIsOpened(prev => !prev)}
          >
            arrow_back_ios_new
          </i>
          <div className={`header__drop ${isOpened ? 'header__visible' : ''}`}>
            {
              data.map(item => (
                <User
                  section={item.section}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
