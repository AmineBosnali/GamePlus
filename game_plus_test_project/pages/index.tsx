import type { NextPage } from 'next'
import { Container, Row } from 'react-bootstrap';
import Header from '../components/header/header';
import Banner from '../components/search/search';
const Home: NextPage = () => {
  return (
    <Container fluid>
      <Header />
      <Banner />
      <Row className="show-grid" style={{backgroundColor:"red"}}>dfg</Row>
    </Container>
  )
}

export default Home
