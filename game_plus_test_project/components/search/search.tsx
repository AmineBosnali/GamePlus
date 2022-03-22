import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/search.module.scss';
import { useAppDistpatch } from '../../store';
import { fetchGames, search } from "../../features/gameSlice";
import { useEffect } from 'react';

const Search = () => {
  const dispatch = useAppDistpatch();
  
  const searchHandle = (e: string) => {
    dispatch(search({ name: e }))
  }

  return (
    <Row>
      <Card style={{ background: 'url(https://gameplus.com.tr/static/media/foot-banner.46c1fc4c.png) center / cover' }}>
        <Card.Body>
          <Col md={{ span: 6, offset: 3 }} xs={{ span: 12 }} className={styles.searchBox}>
            <br />
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
                onChange={(e: any) => searchHandle(e.target.value)}
              />
            </InputGroup>
            <br />
          </Col>
        </Card.Body>
      </Card>
    </Row>
  )
}
export default Search;