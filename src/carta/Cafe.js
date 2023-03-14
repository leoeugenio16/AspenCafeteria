import Cafeteria from '../imagenes/CAFETERIA.png'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import cafeChico from '../imagenes/CAFE/CAFE-CHICO.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cafeGrande from '../imagenes/CAFE/CAFE-GRANDE.jpeg'

const Cafe = () => {
    return (
        <div>
            <div class='div-cafe'><img class="img-cafe" src={Cafeteria} /></div>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row bsPrefix='lista-cafe'>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                CAFE
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                CORTADO
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                LAGRIMA
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link4">
                                MOCACCINO
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link5">
                                CAPUCHINO
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link6">
                                SUBMARINO
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link7">
                                TE
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <CardGroup bsPrefix="cafeChicoYgrande">
                                    <Card >
                                        <Card.Img   variant="top" src={cafeChico} />
                                        <Card.Body>
                                            <Card.Title>CAFE CHICO</Card.Title>
                                            <Card.Text>
                                                $500
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </Card>
                                    <Card >
                                        <Card.Img   variant="top" src={cafeGrande} />
                                        <Card.Body>
                                            <Card.Title>CAFE GRANDE</Card.Title>
                                            <Card.Text>
                                                $550
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">

                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">

                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">

                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">

                            </Tab.Pane>
                            <Tab.Pane eventKey="#link6">

                            </Tab.Pane>
                            <Tab.Pane eventKey="#link7">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Cafe;