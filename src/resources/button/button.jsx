import React from 'react';
import searchIcon from "../img/search.png";
import '../button/button.css'


const Button = ({ onClick }) => {
  return (
    <button className={'btn'} onClick={onClick}>
      <img className={'img_btn'} src={searchIcon} alt="search" />
    </button>
  );
};

export default Button;


