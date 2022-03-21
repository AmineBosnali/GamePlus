import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/browse.games.module.scss';
import FilterCard from "./filterCard";
import CheckFilterCard from "./checkFilterCard";
const BrowseGames = () => {

    return (
        <Row>
            <Card className={styles.bgColor}>
                <Card.Body>
                    <br />
                    <Row>
                        <Col xs={1} sm={1} md={1} lg={1}></Col>
                        <Col xs={12} sm={12} md={2} lg={2} className={styles.browseGames}>Browse Games</Col>
                        <Col xs={7} sm={7} md={7} lg={7}></Col>
                        {/* <Col xs={6} sm={6} md={2} lg={2} className='d-none d-md-block'>
                            <Dropdown className={styles.filterGamesBox}>
                                <Dropdown.Toggle id="dropdown-autoclose-true" className={styles.filterGames}>
                                    Title A-Z
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col> */}
                        <Col xs={6} sm={6} md={2} lg={2} className={styles.filterGamesBox}>
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle id="dropdown-autoclose-true" className={styles.filterGames}>
                                    Title A-Z
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                    <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <br />
                    <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <CheckFilterCard />
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8} className={styles.cardBgColor}>
                                <FilterCard />
                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
                <br /><br />
            </Card>
        </Row>
    )
}
export default BrowseGames;