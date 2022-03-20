import { Col, Dropdown, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/browse.games.module.scss';
import CheckBox from "./checkbox";
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
            <Col xs={12} sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} className={styles.filtersRectangle}>
                <Row>
                <dl>
                    <dt className={styles.listTitle}>State</dt>
                    <CheckBox text="Available" />
                    <CheckBox text="Patching" />
                    <CheckBox text="Maintanence" />
                    <dt className={styles.listTitle}>Genre Filters</dt>
                    <CheckBox text="Shooters" />
                    <CheckBox text="Action" />
                    <CheckBox text="RPG" />
                    <CheckBox text="Racing" />
                    <CheckBox text="MOBA/MMO" />
                    <CheckBox text="Simulation" />
                    <CheckBox text="Strategy" />
                    <CheckBox text="Sports" />
                    <CheckBox text="Kids/Family" />
                    <CheckBox text="Casual" />
                    <CheckBox text="Demo" />
                    <CheckBox text="Horror" />
                    <CheckBox text="Platformer" />
                    <CheckBox text="Battle Royale" />
                    <CheckBox text="Adventure" />
                    <CheckBox text="Open World" />
                </dl>
                <div className="cardBgColor">test</div>
                </Row>            
            </Col>
        </Row>
    )
}
export default BrowseGames;