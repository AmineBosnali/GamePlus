import type { NextPage } from 'next'
import { Container, Row } from 'react-bootstrap';
import Header from '../components/header/header';
import Banner from '../components/search/search';
import BrowseGames from '../components/browseGames/browseGames';
import Footer from '../components/footer/footer';
const Home: NextPage = () => {
  return (
    <Container fluid>
      <Header />
      <Banner />
      <BrowseGames/>
      <Footer/>
    </Container>
  )
}

export default Home
