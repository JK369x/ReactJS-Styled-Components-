import React from 'react'
import { NavBar, NavLogo,NavMenu,NavLink,NavList } from '../styles/styledElements'

function Nav() {
  return (
    <>
        <NavBar>
            <NavLogo to='/'>
                MyReactSite
            </NavLogo>
            <NavMenu>
              <NavList>
                <NavLink to='/'>Home</NavLink>
                </NavList>
                <NavList>
                <NavLink to='/about'>About</NavLink>
                </NavList>
                <NavList>
                <NavLink to='/blog'>Blog</NavLink>
              </NavList>
            </NavMenu>

        </NavBar>
    </>
  )
}

export default Nav