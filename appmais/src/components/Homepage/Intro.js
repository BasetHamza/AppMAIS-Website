import React, { Component } from 'react'

import { Card, Row, Col, Button, ImgOverlay, Container, Nav, Figure, Image} from 'react-bootstrap'

class Intro extends Component{

    render(){
        return(
                <div>
                <Container className='text-light'>
                    <Row>
                        <h1 class="display-1">AppMAIS</h1>
                    </Row>
                    
                    <Row className='text-light mt-5'>
                        <Col className='md={4}'>
                            <h5 class="display-5">Appalachian State Multipurpose Apiary Informatics Systems</h5>
                        </Col>
                    </Row>
                </Container>

                {/* A small summary of the project and sponsor's Logos */}
                <Container className='text-light mt-5'>

                    {/* Summary */}
                    <Row>
                        <Col md={{ span: 9, offset: 1 }} className='d-flex justify-content-md-center'>                        
                            <p>
                                AppMAIS is a multidisciplinary project that aims to investigate the health, 
                                development and genomic diversity of honeybee hives in North Carolina to better
                                understand and optimally prevent the honeybee colony collapse disorder (CCD).
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 9, offset: 1 }} className='d-flex justify-content-md-center'>                        
                            <p>
                                The project is supported by a $1.1 million grant through the University of North Carolina System’s Research Opportunities Initiative (ROI).
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 9, offset: 1 }} className='d-flex justify-content-md-center'>                        
                            <p>
                                The project is a collaboration between the Computer Science Department and the Department of Biology
                                at Appalachian State Univeristy.
                            </p>
                        </Col>
                    </Row>


                    {/* Logos */}

                    <Row className="d-flex justify-content-md-center" fluid>
                        
                            <Col sm="4" className='mt-5 mb-5'>
                                <a href='https://www.northcarolina.edu/' target='_blank'>
                                    <Image src='https://www.northcarolina.edu/wp-content/themes/unc-theme/dist/images/unc-system-logo-white_7ed71d38.svg' alt='UNC system logo' fluid/>
                                </a>
                            </Col>
                        
                        {/* <Col sm="3">
                            <Image src={ASU} alt='ASU logo' fluid/>
                        </Col> */}
                    </Row>
                </Container>
            </div>
        )
    }
}


export default Intro
