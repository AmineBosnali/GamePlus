import { Card, Col, Row } from 'react-bootstrap';
import styles from '../../styles/browse.games.module.scss';
import ListItem from "./filterCardItem";
import Game from "../../models/Game.model";

interface CardProps {
    polygonCharacter?: string;
    games: Game[] | null;
}

const FilterCard: React.FC<CardProps> = (props) => {
    return (
        <>    
        {console.log(props)}    
            {props.games?.map((item: Game) => {
                <>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    <img src="/polygon.svg" className={styles.polygon}></img>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <dl>
                                        <ListItem text="Lorem ipsum dolor sit" />
                                    </dl>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6}>
                                    <dl>
                                        <ListItem text="Lorem ipsum dolor sit" />
                                    </dl>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                </>
            })}

        </>
    )
}
export default FilterCard;