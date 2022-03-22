import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { fetchGames, filterCategories } from '../../features/gameSlice';
import { useAppDistpatch, useAppSelector } from '../../store';
import styles from '../../styles/browse.games.module.scss';
import Categories from "../../mock-categories.json";
import GameCategoryModel from '../../models/game.category.model';
const CheckFilterCardItem = () => {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const dispatch = useAppDistpatch();

    const gamesStore = useAppSelector((state) => state.game);
    useEffect(() => {
        dispatch(fetchGames())
    }, [])

    useEffect(() => {
        dispatch(filterCategories(selectedCategories))
    }, [selectedCategories])

    return (
        <Card className={styles.filtersRectangle}>
            <Card.Body>
                <dl >
                    <dt className={styles.listTitle}>Genre Filters</dt>
                    {Categories.map((item: GameCategoryModel) => {
                        return (
                            <dt className={styles.checkboxRectangle}>
                                <input type="checkbox" className={styles.filterCheckBox} value={item.name} onChange={(e) => {
                                    if (e.target.checked && !selectedCategories.includes(e.target.value)) {
                                        setSelectedCategories(prev => [e.target.value, ...prev]);
                                    }
                                    else if (!e.target.checked && selectedCategories.includes(e.target.value)) {
                                        setSelectedCategories(prev => prev.filter(item => item !== e.target.value));
                                    }
                                }} />
                                <span className={styles.text}>{item.name}</span>
                            </dt>
                        )
                    })}
                </dl>
            </Card.Body>
        </Card>

    )
}
export default CheckFilterCardItem;