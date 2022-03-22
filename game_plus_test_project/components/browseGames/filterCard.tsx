import { Card, Col, Row } from 'react-bootstrap';
import styles from '../../styles/browse.games.module.scss';
import ListItem from "./filterCardItem";
import Game from "../../models/Game.model";
import { useEffect, useState } from "react";

interface CardProps {
    polygonCharacter?: string;
    games: Game[];
}

const FilterCard: React.FC<CardProps> = (props) => {

    const [groupedGames, setGroupedGames] = useState<any>({})

    useEffect(() => {
        let games = [...props.games];
        games.sort();
        let groupedGames: any = {};

        games.map((game: Game) => {
            const firstChar = game.name.charAt(0);
            if (!groupedGames.hasOwnProperty(firstChar)) {
                groupedGames[firstChar] = [game.name];
            } else {
                groupedGames[firstChar] = [game.name, ...groupedGames[firstChar]]
            }
        });
        setGroupedGames(groupedGames);
    }, [props.games]);
    return (
        <>
            {Object.keys(groupedGames).map((gameGroupName: any) => {
                return (
                    <>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xs={12} sm={12} md={2} lg={2}>
                                        <img src="/polygon.svg" className={styles.polygon}></img>
                                        {gameGroupName}
                                    </Col>
                                </Row>
                                {/* <Row> */}
                                   
                                        <dl>
                                            {[groupedGames[gameGroupName]].map((gameName: string, index) => {
                                                return (
                                                    <Row>
                                                    <Col xs={12} sm={12} md={6} lg={6}>
                                                    <ListItem text={gameName} />
                                                    </Col>
                                                    <Col xs={12} sm={12} md={6} lg={6}>
                                                    <ListItem text={gameName} />
                                                    </Col>
                                                    </Row>
                                                )
                                            })}
                                        </dl>
                                   
                                {/* </Row> */}
                            </Card.Body>
                        </Card>
                        <br />
                    </>
                )
            })}
        </>

    )
}
export default FilterCard;