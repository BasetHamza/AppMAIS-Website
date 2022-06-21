import React, { Component, PropTypes } from 'react'

import { Card, Row, Col, Button, ButtonGroup, Container, Accordion } from 'react-bootstrap'


class Publications extends Component {

    
    render() {
        return (
            <div>
                <div  className='d-flex justify-content-md-center'>
                <Container className='mt-5 md={4} '>

                <Row className='d-flex justify-content-md-center'>
                        <Card className='publication-card'  bg='light'>
                            <Card.Body>
                                <Card.Title>
                                    <a href='https://ieeexplore.ieee.org/abstract/document/9763931' target='_blank' rel="noreferrer">
                                    Detecting Anomalies in Honey Bee Hives using their Audio Recordings
                                    </a>
                                </Card.Title>

                                <Row className='mt-3 mb-3'>
                                    <Col className='d-flex justify-content-md-start'>
                                        <Card.Text>
                                            Conference: IEEE SoutheastCon
                                        </Card.Text>    
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Location: Mobile, AL, USA
                                        </Card.Text>    
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Date: 02 May 2022
                                        </Card.Text>    
                                    </Col>
                                </Row>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Abstract</Accordion.Header>
                                        <Accordion.Body>
                                            The rapid decline in the honey bee population is a concerning issue to farmers and researchers, thus it is critical to monitor honey bee hives regularly to evaluate their health status and identify problems. This paper will discuss a method of monitoring that utilizes the audio recordings obtained from inside the hives. These audio recordings were analyzed using Machine Learning tools (Zero-Crossing Rate, Root-Mean Square Energy, Mel-Spectrograms) to identify anomalies. The paper will present some of our early results. The goal of this paper is to illustrate that such analyses can be used as effective tools for monitoring the health of honey bee hives in order to take measures to prevent the hives from collapsing when they are facing adversities. Our current results show that audio files containing background noises such as crow piping, a small humidity control fan running, weed-eaters or lawnmower, rain and thunder, and fighter jets flying above the hives were successfully identified using several Machine Learning tools.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Container className='mt-3 d-flex justify-content-end'>
                                    <Container className='d-flex justify-content-md-center'>
                                        <Button variant="light" ><a href='https://ieeexplore.ieee.org/abstract/document/9763931' target='_blank' rel="noreferrer">Cite</a></Button>
                                    </Container>
                                    <Container className='d-flex justify-content-md-center'>
                                        <Button variant="light"><a href='https://ieeexplore.ieee.org/abstract/document/9763931' target='_blank' rel="noreferrer">Download</a></Button>
                                    </Container>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Row>

                    
                    <Row className='mt-5 d-flex justify-content-md-center'>
                        <Card className='publication-card'  bg='light'>
                            <Card.Body>
                                <Card.Title>
                                    <a href='https://ieeexplore.ieee.org/abstract/document/9763931' target='_blank' rel="noreferrer">
                                        Estimating the Number of Drones at the Entrance of a Honey Bee Hive using Machine Learning Tools
                                    </a>
                                </Card.Title>

                                <Row className='mt-3 mb-3'>
                                    <Col className='d-flex justify-content-md-start'>
                                        <Card.Text>
                                            Conference: IEEE SoutheastCon
                                        </Card.Text>    
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Location: Mobile, AL, USA
                                        </Card.Text>    
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Date: 02 May 2022
                                        </Card.Text>    
                                    </Col>
                                </Row>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Abstract</Accordion.Header>
                                        <Accordion.Body>
                                            There are three types of bee in a honey bee hive: one queen which is in charge of laying 
                                            eggs and controlling the population of the hive, a large number of worker bees that are 
                                            all female and hold various responsibilities to maintain the entire hive, and a small 
                                            number of drones (about 2-3%) that are male and their sole job is to mate with queens and 
                                            spread the genetics of their hive in rare successful mating flights. There are various 
                                            reasons for having a larger than normal number of drones which may cause a hive to collapse. 
                                            Among the reasons for having too many drones are: a bad queen or a worker bee laying 
                                            unfertilized eggs. It is important that the number of drones be monitored carefully as that 
                                            can provide a good indication of the health of a hive. In order to monitor the number of drones, 
                                            we use a hive monitoring system called Beemon that is created in the Visual and Image Processing (VIP) 
                                            lab in our department. This system allows beekeepers and researchers to monitor their hives and will 
                                            aid them in detecting potential problems within their hives. Deviations from a normal pattern can 
                                            signify problems within the hive that are preventable by immediate action. In this paper, we will 
                                            provide the technical details on a computer vision program aimed at estimating the number of drone 
                                            bees in videos that are taken in front of several honey bee hives. The program estimates the number 
                                            of drones to assist the beekeepers learn about the possible deviations as they occur. This 
                                            program utilizes Python and OpenCV to classify bees in videos by applying motion detection and 
                                            background subtraction methods. Using the two methods in conjunction aids in suppressing error 
                                            in bee detection in cases in which the hive has a high amount of traffic. This paper will share 
                                            some of the early results for several hives.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Container className='mt-3 d-flex justify-content-end'>
                                    <Container className='d-flex justify-content-md-center'>
                                        <Button variant="light" ><a href='https://ieeexplore.ieee.org/abstract/document/9764040' target='_blank' rel="noreferrer">Cite</a></Button>
                                    </Container>
                                    <Container className='d-flex justify-content-md-center'>
                                        <Button variant="light"><a href='https://ieeexplore.ieee.org/abstract/document/9764040' target='_blank' rel="noreferrer">Download</a></Button>
                                    </Container>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Row>

                </Container>
            </div>
            </div>
        )
    }
}

export default Publications