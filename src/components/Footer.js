import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo1 from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import sig2 from "../assets/img/signature (2).png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo1} alt="Logo" />
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/whitedevil2468/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Dhanush2468"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <img src={sig2} alt="sig" style={{ marginLeft: '9rem' }} />
          </Col>
          


        </Row>
      </Container>
    </footer>
  )
}
