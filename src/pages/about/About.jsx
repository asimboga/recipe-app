import { AboutContainer, InfoContainer, StyledImage } from './About.style';

import developer from '../../assets/developer.png';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={developer} />
      <div>
        <h1>
          About Software Developer <span>Asım BOĞA</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Asım</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML, CSS, JS, ReactJS, SQL, Python.
        </h4>
        <h2>
          <a href="mailto:asimboga@gmail.com">Send email</a> :
          asimboga@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
