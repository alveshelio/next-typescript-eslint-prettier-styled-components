import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const NavInner = styled.div``;

const NabBarCollapsible = styled.div``;
const NavBarNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`


const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: hotpink;
  text-decoration: none;
`

const ToggleButton = styled.button``;

const NavBar = () => (
  <Nav>
    <NavInner>
      <NavLink href="#" as="a">Start Bootstrap</NavLink>
      <ToggleButton type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </ToggleButton>
      <NabBarCollapsible id="navbarResponsive">
        <NavBarNav className="navbar-nav ml-auto">
          <NavItem className="nav-item active">
            <NavLink href="#" as="a">Home</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="#" as="a">About</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="#" as="a">Services</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="#" as="a">Contact</NavLink>
          </NavItem>
        </NavBarNav>
      </NabBarCollapsible>
    </NavInner>
  </Nav>
)

export default NavBar
