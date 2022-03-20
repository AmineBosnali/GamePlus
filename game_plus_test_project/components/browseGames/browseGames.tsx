import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/browse.games.module.scss';
import FilterCard from "./filterCard";
import CheckFilterCard from "./checkFilterCard";
const BrowseGames = () => {

    return (
        <Row className={styles.bgColor}>
            <Col xs={12} sm={12} md={{ span: 2, offset: 2 }} lg={{ span: 2, offset: 2 }} className={styles.browseGames}>Browse Games</Col>
            <Col xs={12} sm={12} md={6} lg={6} className={styles.filterGamesBox}>
                <Dropdown className="d-inline mx-2">
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
            <Col xs={12} sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} className={styles.filterCards}>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4}>
                      <CheckFilterCard/>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} className={styles.cardBgColor}>
                        <FilterCard/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default BrowseGames;