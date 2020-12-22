import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {
    faKaggle,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.div`
  background-color: rgb(0, 0, 0);
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1 rem;
`;

const FooterText = styled.h3`
font-weight: bolder;
font-size: 1.6rem;
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

const RightsText = styled.h3`
font-weight: normal;
font-size: 1rem;
`;

const Footer = ({ currentTheme }) => {

    return (
            
        <FooterWrapper>
            
                <FooterText>
                    Rafael Greca
                </FooterText>

                <SocialMedia>
                <Media href="https://www.github.com/rafaelgreca">
                    <FontAwesomeIcon icon={faGithub} size="1.5x" />
                </Media>
                <Media href="https://www.linkedin.com/in/rafaelgreca/">
                    <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
                </Media>
                <Media href="https://www.kaggle.com/rafaelgreca">
                    <FontAwesomeIcon icon={faKaggle} size="1.5x" />
                </Media>
                </SocialMedia>

                <RightsText>
                    Rafael Greca © 2021. All Right Reserved.
                </RightsText>

        </FooterWrapper>
    );
}

export default Footer;