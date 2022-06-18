import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'

class NavigationBar extends Component{

    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>

                    <Navbar.Brand href="#home">AppMAIS</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        <Nav.Link href="#home">Home</Nav.Link>

                        <NavDropdown title="Research" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#research/bevee">BeeVee</NavDropdown.Item>
                            <NavDropdown.Item href="#research/beephon">BeePhon</NavDropdown.Item>
                            <NavDropdown.Item href="#research/beeviz">BeeViz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#research/pubs">Publications</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#beestream">BeeStream</Nav.Link>

                        <Nav.Link href="#beelive">BeeLive</Nav.Link>

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
