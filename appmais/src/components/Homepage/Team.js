import React, { Component } from 'react'

import { Card, Row, Col, Button, Container} from 'react-bootstrap'


import Rahman from '../../assets/img/images/people/drT.jpg'
import Mitch from '../../assets/img/images/people/parry.jpg'
import Schialvo from '../../assets/img/images/people/schialvo.jpg'
import Hamza from '../../assets/img/images/people/hamza.jpg'
import Feng from '../../assets/img/images/people/feng.jpg'
import Chris from '../../assets/img/images/people/chris.png'

// This Component needs to be re-visited to create the cards dynamically using the data of the researchers stored in _Data.js

// The images of the researchers need to be centered and replaced with better quality images

class Team extends Component{

    render(){
        return(
            <div>
                <Container className='text-light'>                    
                    <Row className='text-light mt-5'>
                        <Col className='md={4} d-flex text-center justify-content-md-center'>
                            <p class="display-3">Meet the Team</p>
                        </Col>
                    </Row>
                </Container>

                <Container className='text-light'>                    
                    <Row className='text-light mt-5 mb-3'>
                        <Col className='md={4} font-weight-light d-flex justify-content-md-center'>
                            <p class="display-5">Principle Investigators</p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm className='d-flex justify-content-md-center'>
                            <Card className='researcher-card text-center rounded' >
                                {/* <Card.Img className='rounded-circle card-img-top' variant="top" src={Rahman}/> */}
                                <Card.Body>
                                    <Container className='d-flex justify-content-md-center'>
                                        <div class="avatar-big">
                                            <img class="avatar-img rounded-circle" src={Rahman} alt='Rahman Tashakkori'/>
                                        </div>
                                    </Container>
                                    <Card.Title className='mt-4'>Dr. Rahman Tashakkori, Ph.D.</Card.Title>
                                    <Card.Text>
                                        Dr. Tashakkori is the PI of the project. He has a decade of experience 
                                        working with bees. He is specialied in imaging processing and database.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <Button variant="outline-dark"><a href='https://cs.appstate.edu/~rt/' target='_blank' rel="noreferrer">Read More</a></Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col sm className='d-flex justify-content-md-center'>
                            <Card className='researcher-card text-center rounded' >
                                {/* <Card.Img className='rounded-circle card-img-top' variant="top" src={Rahman}/> */}
                                <Card.Body>
                                    <Container className='d-flex justify-content-md-center'>
                                        <div class="avatar-big">
                                            <img class="avatar-img rounded-circle" src={Mitch} alt='Mitch Parry'/>
                                        </div>
                                    </Container>

                                    <Card.Title className='mt-4'>Dr. Mitch Parry, Ph.D.</Card.Title>
                                    <Card.Text>
                                        Dr. Parry is the expert in data science and machine learning. He develops
                                        the analytical models for the project.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-dark"><a href='https://cs.appstate.edu/~rmp/' target='_blank' rel="noreferrer">Read More</a></Button>
                                </Card.Footer>
                            </Card>
                        </Col>


                        <Col sm className='d-flex justify-content-md-center'>
                            <Card className='researcher-card text-center rounded' >
                                {/* <Card.Img className='rounded-circle card-img-top' variant="top" src={Rahman}/> */}
                                <Card.Body>
                                    <Container className='d-flex justify-content-md-center'>
                                        <div class="avatar-big">
                                            <img class="avatar-img rounded-circle" src={Schialvo} alt = 'Clare Chialvo'/>
                                        </div>
                                    </Container>
                                                                        
                                    <Card.Title className='mt-4'>Dr. Clare Scott Chialvo, Ph.D.</Card.Title>
                                    <Card.Text>
                                        Dr. Chialvo is the responsible of collecting and the genetic analysis
                                        of the bees.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-dark"><a href='https://sites.google.com/appstate.edu/scott-chialvo-lab' target='_blank' rel="noreferrer">Read More</a></Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col sm className='d-flex justify-content-md-center' >
                            <Card className='researcher-card text-center rounded' >
                                {/* <Card.Img className='rounded-circle card-img-top' variant="top" src={Rahman}/> */}
                                <Card.Body>
                                    <Container className='d-flex justify-content-md-center'>
                                        <div class="avatar-big">
                                            <img class="avatar-img rounded-circle" src={Hamza} alt='Abdelbaset Hamza'/>
                                        </div>
                                        </Container>
                                    <Card.Title className='mt-4'>Dr. Abdelbaset Hamza, Ph.D.</Card.Title>
                                    <Card.Text>
                                        Dr. Hamza's reasearch focuses on IoT and Networking. He manages the
                                        networking and IoT dashboard.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="outline-dark"><a href='https://cs.appstate.edu/~hamzaas/' target='_blank' rel="noreferrer">Read More</a></Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                
                <Row>
                    <Col sm className='md={4} font-weight-light d-flex justify-content-md-center'>
                        <div className="d-flex flex-column">
                        
                            <div className="p-2 col-example text-left">
                                <Container className='text-light mt-5 mb-3 text-center'>
                                    <p class="display-5">Collaborators</p> 
                                </Container>
                            </div>

                            <div className="p-2 col-example text-left ">
                            <Container className='d-flex justify-content-md-center mt-5 mb-3 text-center'>
                                    <Card className='researcher-card rounded' >
                                        {/* <Card.Img className='rounded-circle card-img-top' variant="top" src={Rahman}/> */}
                                        <Card.Body>
                                            <Container className='d-flex justify-content-md-center'>
                                                <div class="avatar-big">
                                                    <img class="avatar-img rounded-circle" src={Feng} alt='Tinghao Feng'/>
                                                </div>
                                            </Container>
                                            <Card.Title className='mt-4'>Dr. Tinghao Feng, Ph.D.</Card.Title>
                                            <Card.Text>
                                                Dr. Feng is specialized in visulation. He is working on developing
                                                an extensive visualization tool to analyze the data.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="outline-dark"><a href='#'>Read More</a></Button>
                                        </Card.Footer>
                                    </Card>
                                </Container>
                            </div>  
                        </div>
                    </Col>

                    <Col sm className='md={4} font-weight-light d-flex justify-content-md-center'>
                        <div className="d-flex flex-column">
                        
                            <div className="p-2 col-example text-left">
                                <Container className='text-light mt-5 mb-3 text-center'>
                                    <p class="display-5">Research Asscoiates</p> 
                                </Container>
                            </div>

                            <div className="p-2 col-example text-left">
                                <Container className='d-flex justify-content-md-center mt-5 mb-3 text-center'>
                                    <Card className='researcher-card text-center rounded' >
                                        {/* <Card.Img className='rounded-circle card-img-top' variant="top" src={Rahman}/> */}
                                        <Card.Body>
                                            <Container className='d-flex justify-content-md-center'>
                                                <div class="avatar-big">
                                                    <img class="avatar-img rounded-circle" src={Chris} alt = 'Chris Campell'/>
                                                </div>
                                            </Container>
                                            
                                            <Card.Title className='mt-4'>Christopher Campell, M.Sc.</Card.Title>
                                            <Card.Text>
                                                Mr. Campell is a data scientist who has industry experience. He 
                                                leads the data analysis of the project and manages students working 
                                                on the project. 
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button variant="outline-dark"><a href='#'>Read More</a></Button>
                                        </Card.Footer>
                                    </Card>
                                </Container>
                            </div>  
                        </div>
                    </Col>
                </Row>               
            </div>
        )
    }
}


export default Team
