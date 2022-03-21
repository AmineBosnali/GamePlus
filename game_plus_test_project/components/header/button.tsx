import { Col, Nav, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/header.module.scss';

interface ButtonProps {
    buttonName: string;
    isVisibleSelect: boolean;
    href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <Nav.Link href={props.href} className={props.isVisibleSelect ? styles.menuButtonActive : styles.menuButton}>
            {props.buttonName}
            {/* <Row>
                <Col xl={12} md={12} sm={6} xs={6}>
                    {props.buttonName}
                </Col>
               
                    <Col xl={12} md={12} sm={3} xs={3}>
                    {props.isVisibleSelect &&
                        <img src="/menu_icon.svg"
                            className={styles.path2}></img>
                        }
                    </Col>
               
            </Row> */}
        </Nav.Link>

    )
}
export default Button;