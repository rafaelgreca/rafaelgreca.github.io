import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {
    faKaggle,
    faLinkedin,
    faGithub,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const TextWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 10rem 0;
  z-index: 90;

  @media screen and (max-width: 768px){
    margin: 6rem 0;
  }
`;

const HelloText = styled.h1`
font-weight: bolder;
font-size: 2.4rem;
letter-spacing: 0.1rem;
`;

const IntroductionText = styled.h2`
font-weight: normal;
font-size: 2rem;
`;

const SocialMedia = styled.div`
  padding: 1.5rem;
`;

const Media = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;
`;

const HomePage = ({ currentTheme }) => {

    return (
            
        <TextWrapper>
            
                <HelloText>
                    Hello, I'm Rafael Greca.
                </HelloText>

                <IntroductionText>
                    I'm a computer science student and AI enthusiastic.
                </IntroductionText>

                <SocialMedia>
                <Media href="https://www.github.com/rafaelgreca">
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                </Media>
                <Media href="https://www.linkedin.com/in/rafaelgreca/">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </Media>
                <Media href="https://www.instagram.com/rafael_greca/">
                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                </Media>
                <Media href="https://www.kaggle.com/rafaelgreca">
                    <FontAwesomeIcon icon={faKaggle} size="1x" />
                </Media>
                </SocialMedia>

        </TextWrapper>
    );
}

export default HomePage;