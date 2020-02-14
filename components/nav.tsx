import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const links = [
  {href: 'https://zeit.co/now', label: 'ZEIT'},
  {href: 'https://github.com/zeit/next.js', label: 'GitHub'},
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

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

const NavBar = () => (
  <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <NavLink href="#">Start Bootstrap</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
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
    </div>
  </Nav>
)

export default NavBar
