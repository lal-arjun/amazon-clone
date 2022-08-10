import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {

  const [{basket, user}, dispatch] = useStateValue();
  console.log("user is >>>", user)

  const handleAuthetication = () => {
      if (user){
        auth.signOut();
        // console.warn('User is >>>', user)
      }
  }
  return (
    <div className='header'>
      <Link to = "/">
        <img 
        className = 'header__logo'
        src = 'https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png'
      alt = "" />
      </Link>
      <div className="header__search">
        <input className = "header__searchInput" type = 'text' />
        <SearchIcon className = "header__searchIcon" />
      </div> 
        <div className="header__nav">
        <Link to = {(!user && "/login")}>
            <div onClick = {handleAuthetication} className="header__option">
              <span className="header__optionLineOne">Hello {!user? "Guest": user.email}</span>
              <span className="header__optionLineTwo">{!user? "Sign In": "Sign out"}</span>
            </div>
        </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>         
          </div>
        <Link to = "/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span class="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>  
        </Link>
      </div>

    </div>
  )
}



export default Header