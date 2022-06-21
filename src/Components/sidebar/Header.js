import React, { useState } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  )
}

Header.args = {
  color: 'light',
  light: true,
  dark: false,
  full: false,
  expand: 'md',
  container: 'fluid',
}

export default Header
