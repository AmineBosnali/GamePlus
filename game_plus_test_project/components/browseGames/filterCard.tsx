import { Card, Col, Row } from 'react-bootstrap';
import styles from '../../styles/browse.games.module.scss';
import ListItem from "./filterCardItem";

interface CardProps {
    polygonCharacter?: string;
}

const FilterCard: React.FC<CardProps> = (props) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12} sm={12} md={2} lg={2}>
                        <img src="/polygon.svg" className={styles.polygon}></img>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={{ span: 3, offset: 1 }} lg={{ span: 4, offset: 1 }}>
                        <dl>
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Adipiscing consectetur dolor" />
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Adipiscing consectetur dolor" />
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Consectetur lorem adipiscing" />
                            <ListItem text="Lorem ipsum dolor sit" />
                        </dl>
                    </Col>
                    <Col md={1} lg={1}></Col>
                    <Col xs={12} sm={12} md={{ span: 3, offset: 1 }} lg={{ span: 4, offset: 1 }}>
                        <dl>
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Adipiscing consectetur dolor" />
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Adipiscing consectetur dolor" />
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Lorem ipsum dolor sit" />
                            <ListItem text="Consectetur lorem adipiscing" />
                            <ListItem text="Lorem ipsum dolor sit" />
                        </dl>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default FilterCard;