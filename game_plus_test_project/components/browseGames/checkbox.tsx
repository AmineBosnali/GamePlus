import { ListGroup } from "react-bootstrap";
import styles from '../../styles/browse.games.module.scss';

interface CheckBoxProps {
  text: string;
  isVisibleSelect?: boolean;
}

const Checkbox: React.FC<CheckBoxProps> = (props) => {
  return (
    <dt className={styles.checkboxRectangle}>
         <input type="checkbox" className={styles.checkbox} value="Bike"/>
         <span className={styles.text}>{props.text}</span>       
    </dt>
  )
}
export default Checkbox;