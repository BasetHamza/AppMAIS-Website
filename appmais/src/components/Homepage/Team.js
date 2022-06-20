import React, { Component } from 'react'

import { Card, Row, Col, Button, ImgOverlay, Container, Nav, Figure, Image} from 'react-bootstrap'

class Team extends Component{

    render(){
        return(
            <div>
                <Container className='text-light'>                    
                    <Row className='text-light mt-5'>
                        <Col className='md={4}'>
                            <h5 class="display-5">Meet the Team</h5>
                        </Col>
                    </Row>
                </Container>

               
            </div>
        )
    }
}


export default Team
