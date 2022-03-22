import styles from '../../styles/browse.games.module.scss';

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = (props) => {

  return (
    <dt 
    className={styles.filterBoxListElement}
    >{props.text}</dt>
  )
}
export default Item;