import React from 'react';
import './MenuButton.scss';

const MenuButton = () => {
  return (
    <a href="/" className="menu-button">
      <span className="menu-button__icon material-icons">add_circle_outline</span>
      <span className="menu-button__playlist">New Playlist</span>
    </a>
  )
}

export default MenuButton
