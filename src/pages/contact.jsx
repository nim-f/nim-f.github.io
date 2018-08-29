import React from 'react';
import Helmet from 'react-helmet';
import { FaEnvelope, FaFacebook, FaPaperPlane } from 'react-icons/lib/fa';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container text>
      <h1>Contact me!</h1>
      <p className="contact-link">
        <a href="mailto:fatamorgana9205@gmail.com">
          <FaEnvelope />
          <span>fatamorgana9205@gmail.com</span>
        </a>
      </p>
      <p className="contact-link">
        <a href="https://t.me/nim_ff" target="_blank" rel="noopener noreferrer">
          <FaPaperPlane />
          <span>nim_ff</span>
        </a>
      </p>
      <p className="contact-link">
        <a href="https://www.facebook.com/annie.richter.906" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
          <span>Annie Richter</span>
        </a>
      </p>
    </Container>
    <Footer />
  </div>
);

export default Contact;
