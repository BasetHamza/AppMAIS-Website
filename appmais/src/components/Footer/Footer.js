import React, { Component } from 'react'

import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'

import SocialFollow from './SocialFollow'

class Footer extends Component{

    render(){
        return(
            <div>
                <div class="clear"></div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
                    <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Text>
                                © 2020 Copyright: cs.appstate.edu
                            </Navbar.Text>
                        </Nav>                    
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <SocialFollow />
                    </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
        )
    }
}


export default Footer
