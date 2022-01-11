import React from 'react';
import './MenuButton.scss';

const MenuButton = () => {
  return (
    <div className="menuButton">
      <a href="/" className="menuButton__playlist">
        <span className="menuButton__playlist--icon material-icons">add_circle_outline</span>
        <span className="menuButton__playlist--playlist">New Playlist</span>
      </a>
    </div>
  )
}

export default MenuButton
