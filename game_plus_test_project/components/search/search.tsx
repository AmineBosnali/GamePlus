import { Col, Form, InputGroup, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/search.module.scss';

const Search = () => {

  return (
    <Row className={styles.gfnMotifBackgroundHero}>
      <Col md={{ span: 6, offset: 3 }} xs={{ span: 12 }} className={styles.searchBox}>
        <div className={styles.searchTitle}>
          Lorem ipsum dolor sit amet consectetur
        </div>
        <div className={styles.searchDescription}>
          With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!
        </div>
        <InputGroup className="mb-3">
          <InputGroup.Text className={styles.combinedShape}>
            <img src="/search_icon.svg"></img>
          </InputGroup.Text>
          <Form.Control
            placeholder="Search Games"
            className={styles.searchInput}
          />
        </InputGroup>
      </Col>
    </Row>
  )
}
export default Search;