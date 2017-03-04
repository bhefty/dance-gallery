import React from 'react';
import { Grid, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

import StyledNavbar from './StyledNavbar'

const Navigation = (props) => {
    return (
        <StyledNavbar staticTop collapseOnSelect={true}>
        <Grid>
            <Navbar.Header>
            <Navbar.Brand>
                <Link to='/'>The Dance Gallery</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to='/'>
                <NavItem>Home</NavItem>
                </LinkContainer>
                <NavDropdown title='Schedule' id='basic-nav-dropdown'>
                <MenuItem>Productions</MenuItem>
                <MenuItem>Schedule 2016-17</MenuItem>
                <MenuItem>Parent's Observation Day</MenuItem>
                <MenuItem>Supplemental Classes</MenuItem>
                </NavDropdown>
                <NavDropdown title='Companies' id='basic-nav-dropdown'>
                <MenuItem>Ballet Company</MenuItem>
                <MenuItem>Company Dance Gallery</MenuItem>
                <MenuItem>Darling Company</MenuItem>
                <MenuItem>Messengers</MenuItem>
                <MenuItem>Starlet Company</MenuItem>
                </NavDropdown>
                <NavDropdown title='Learn More' id='basic-nav-dropdown'>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Dancer's Closet</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem divider />
                <MenuItem>Frequently Asked Questions</MenuItem>
                </NavDropdown>
                <LinkContainer to='/'>
                <NavItem>Contact Us</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Grid>
        </StyledNavbar>
    );
}

export default Navigation