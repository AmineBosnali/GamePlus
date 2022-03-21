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
                        <Col xs={12} sm={12} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} className={styles.browseGames}>Browse Games</Col>
                        <Col xs={12} sm={12} md={6} lg={6} className={styles.filterGamesBox}>
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