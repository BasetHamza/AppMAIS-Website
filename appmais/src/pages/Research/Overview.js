import React, { Component } from 'react'

import { Card, Row, Col, Button, ImgOverlay, Container, Nav, Figure, Image} from 'react-bootstrap'

class Overview extends Component{

    render(){
        return(
                <div className="homepage blank-page">
                <Container className='text-light'>
                    <Row>
                        <h1 class="display-1">AppMAIS</h1>
                    </Row>
                    <Row className='text-center mt-5'>
                        <h3 class="display-3">PAGE IS UNDER CONSTRUCTION</h3>
                    </Row>
                    <Row>
                        <h4 class="display-4 text-center mt-5">BEE PATIENT</h4>
                    </Row> 
                </Container>

            </div>
        )
    }
}


export default Overview
