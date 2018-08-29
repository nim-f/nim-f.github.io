import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About</Header>
    <Container text>
      <h1>Hi!</h1>

      <p>I am front end developer with 8+ years of professional experience, based in Burgas, Bulgaria.</p>

      <p>I develop fast, fully interactive and responsible websites and apps using modern frameworks and best practices. I never stop learning and improving my skills. I try to be in touch with new standards and trends in fast changing world of front-end.</p>

      <p>I am also familiar with backend technologies - Ruby on Rails, Python (Django templates), PHP, Node.js.</p>

      <p>I was lucky to work for world-famous brands such as Google, Toyota, Suzuki, Blizzard, Lays and Ferrero.</p>

      <div>
        <h2 className="skills-title">My skills:</h2>

        <div className="skills">
          <div>
            <h3>Basic</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>


          <div>
            <h3>Styles</h3>
            <ul>
              <li>Stylus</li>
              <li>Sass</li>
              <li>PostCSS</li>
              <li>BEM</li>
            </ul>
          </div>

          <div>
            <h3>Frameworks and libraries</h3>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>React Native</li>
              <li>Electron</li>
              <li>Vue.js</li>
              <li>Jquery</li>
            </ul>
          </div>


          <div>
            <h3>Design</h3>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illistrator</li>
              <li>Zeplin</li>
              <li>Avocode</li>
              <li>Inkscape</li>
            </ul>
          </div>

          <div>
            <h3>Bundlers / task managers</h3>
            <ul>
              <li>Webpack</li>
              <li>Gulp</li>
            </ul>
          </div>

          <div>
            <h3>API</h3>
            <ul>
              <li>Rest api</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div>
            <h3>Animations</h3>
            <ul>
              <li>CSS animations</li>
              <li>GSAP</li>
              <li>SVG animations</li>
            </ul>
          </div>



        </div>
      </div>
      <div>
        <img src="/logos/me2.jpg" alt="me" />
      </div>
    </Container>
    <Footer />
  </div>
);

export default About;
