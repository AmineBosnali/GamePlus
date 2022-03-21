import { Col, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../../styles/footer.module.scss';

const Footer = () => {

  return (
    <>
      <Row className={styles.rectangleWhite}>
        <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
          <Row>
            <Col xs={4} sm={4} md={2} lg={2}>
              <dl className={styles.footerWhiteBox}>
                <dt>Games</dt>
                <dt>Membership</dt>
                <dt>Download</dt>
              </dl>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2}>
              <dl className={styles.footerWhiteBox}>
                <dt>Contact Us</dt>
                <dt>Blog</dt>
              </dl>
            </Col>
            <Col xs={4} sm={4} md={2} lg={2}>
              <dl className={styles.footerWhiteBox}>
                <dt>FAQs</dt>
                <dt>Service Status</dt>
              </dl>
            </Col>
            <Col className='d-none d-lg-block' xs={0} sm={0} md={2} lg={2}>
              <dl className={styles.footerWhiteBox}>
                <dt>Follow Us!</dt>
                <dt>
                  <img src="/facebook_icon.svg" className={styles.iconfacebook} />
                  <img src="/twitter_icon.svg" className={styles.icontwitter} />
                  <img src="/instagram_icon.svg" className={styles.iconinstagram} />
                  <img src="/youtube_icon.svg" className={styles.iconyoutube} />
                </dt>
              </dl>
            </Col>
            <Col className='d-none d-lg-block' xs={0} sm={0} md={2} lg={2}>
              <dl className={styles.footerWhiteBox}>
                <dt>Site Language</dt>
                <dt className={styles.english}>English</dt>
              </dl>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.rectangleBlack}>
        <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }} className={styles.footerBlackBox}>
          <Row>
            <Col xs={2} sm={2} md={1} lg={1}>
              <span className={styles.footerBlackItem}>
                Terms of Use
              </span>
            </Col>
            <Col xs={2} sm={2} md={1} lg={1}>
              <span className={styles.footerBlackItem}>
                Privacy Policy
              </span>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
              <span className={styles.footerBlackItem}>
                Cookies
              </span>
            </Col>
            <Col xs={5} sm={5} md={7} lg={7}></Col>
            <Col className='d-none d-lg-block' xs={0} sm={0} md={2} lg={2}>
              <span className={styles.footerBlackItem2}>
                Tüm hakları saklıdır.
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default Footer;