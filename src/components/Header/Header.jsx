import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Header.css"
function Header() {
  return (
    <div className='header'>
      <div className="header__left">
        {/* avatars for login users */}
        <AccountCircleIcon className='header__avatar' src="user_url" alt="Dinesh"/>
        {/* time icon */}
        <AccessTimeIcon/>
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchRoundedIcon/>
        {/* input */}
        <input placeholder='Search' type='search'/>
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon/>

      </div>
    </div>
  )
}

export default Header
