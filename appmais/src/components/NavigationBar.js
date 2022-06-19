import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

class NavigationBar extends Component{

    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>

                    <Navbar.Brand  as={NavLink} to='/'>AppMAIS</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>

                            <NavDropdown title="Research" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to='/research/beevee'>BeeVee</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/research/beephon'>BeePhon</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/research/beeviz'>BeeViz</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/research/gene'>BeeGene</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to='/research/pub'>Publications</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="BeeStream" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to='/research/live'>Live Stream</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to='/research/archive'>Archive</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={NavLink} to='/beelive'>BeeLive</Nav.Link>

                        </Nav>

                        {/* The following should show when we are logged in. It should show logged in as and the logout button */}
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}

                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}


export default NavigationBar
