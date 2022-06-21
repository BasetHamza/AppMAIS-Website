import React, { Component, PropTypes } from 'react'

import { Card, Row, Col, Button, Container, Accordion } from 'react-bootstrap'


class Publications extends Component {

    
    render() {
        return (
            <div>
                <Col className='mt-5 md={4} d-flex justify-content-md-center'>

                    <Row>
                        <Card className='publication-card'>
                            <Card.Body>
                                <Card.Title>Estimating the Number of Drones at the Entrance of a Honey Bee Hive using Machine Learning Tools</Card.Title>
                                
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                                <Card.Text>
                                    Abstract: 
                                </Card.Text>
                                <Card.Text>
                                There are three types of bee in a honey bee hive: one queen which is in charge of laying eggs and controlling
                                 the population of the hive, a large number of worker bees that are all female and hold various responsibilities 
                                 to maintain the entire hive, and a small number of drones (about 2-3%) that are male and their sole job is to 
                                 mate with queens and spread the genetics of their hive in rare successful mating flights. There are various 
                                 reasons for having a larger than normal number of drones which may cause a hive to collapse. Among the reasons 
                                 for having too many drones are: a bad queen or a worker bee laying unfertilized eggs. It is important that the 
                                 number of drones be monitored carefully as that can provide a good indication of the health of a hive. In order 
                                 to monitor the number of drones, we use a hive monitoring system called Beemon that is created in the Visual 
                                 and Image Processing (VIP) lab in our …
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>


                    <Row>
                        
                    </Row>

                </Col>
            </div>
        )
    }
}

export default Publications