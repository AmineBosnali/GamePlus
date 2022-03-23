import styles from '../../styles/browse.games.module.scss';
import { Card, Col, Row } from 'react-bootstrap';

interface ItemProps {
  gameListByLetter: any;
}

const Item: React.FC<ItemProps> = (props) => {

  const halfArrLength = Math.round(props.gameListByLetter.length / 2);

  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={6}>
        <dl>
          {props.gameListByLetter.map((item: string, index: number) => {
            return (
              index < halfArrLength &&
              <dt className={styles.filterBoxListElement}>{item}</dt>
            )
          })}
        </dl>
      </Col>

      <Col xs={12} sm={12} md={6} lg={6}>
        <dl>
          {props.gameListByLetter.map((item: string, index: number) => {
            return (
              index >= halfArrLength &&
              <dt className={styles.filterBoxListElement}>{item}</dt>
            )
          })}
        </dl>
      </Col>
    </Row>
  )
}
export default Item;