import { Card } from 'react-bootstrap';
import styles from '../../styles/browse.games.module.scss';
import CheckBox from "./checkbox";

const CheckFilterCardItem = () => {
    return (
        <Card className={styles.filtersRectangle}>
            <Card.Body>
                <dl >
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
            </Card.Body>
        </Card>
        
    )
}
export default CheckFilterCardItem;