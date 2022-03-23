import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/browse.games.module.scss';
import FilterCard from "./filterCard";
import CheckFilterCard from "./checkFilterCard";
import { fetchGames, sorting } from "../../features/gameSlice";
import { useEffect } from 'react';
import { useAppDistpatch, useAppSelector } from '../../store';

const BrowseGames = () => {

    const gamesStore = useAppSelector((state) => state.game);
    const dispatch = useAppDistpatch();
    useEffect(() => {
        dispatch(fetchGames())
    }, [])

    const handleSelect = (e: string) => {
        dispatch(sorting({ name: e }))
    }

    return (
        <Row>
            <Card className={styles.bgColor}>
                <Card.Body>
                    <br />
                    <Row>
                        <Col xs={1} sm={1} md={1} lg={1}></Col>
                        <Col xs={12} sm={12} md={2} lg={2} className={styles.browseGames}>Browse Games</Col>
                        <Col xs={7} sm={7} md={7} lg={7}></Col>
                        <Col xs={6} sm={6} md={2} lg={2} className={styles.filterGamesBox}>
                            <Dropdown className="d-inline" onSelect={handleSelect}>
                                <Dropdown.Toggle id="dropdown-autoclose-true" className={styles.filterGames}>
                                    Title A-Z
                                </Dropdown.Toggle>
                                <Dropdown.Menu className={styles.filterGamesMenu}>
                                    <Dropdown.Item className={styles.filterGamesMenuItem} eventKey="A-Z" >Title A-Z</Dropdown.Item>
                                    <Dropdown.Item className={styles.filterGamesMenuItem} eventKey="Z-A">Title Z-A</Dropdown.Item>
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
                                <FilterCard games={gamesStore.filterData} />
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