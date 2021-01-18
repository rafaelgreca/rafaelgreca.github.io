import React from 'react';
import styled from 'styled-components';
import photo from './photo.jpg';
import PDF_portuguese from './RafaelGreca_CV_PTBR.pdf';
import PDF_english from './RafaelGreca_CV_EN.pdf';

const AboutWrapper = styled.div`
  background-color: #efeeec;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.7rem;
`;

const AboutTitle = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  border-bottom: 4px solid rgb(0, 0, 0);
  width: 20%;

  @media screen and (max-width: 768px){
    width: 50%;
  }
`;

const ProfileWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1.2rem;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
width: 27%;
heigth: 20%;
margin-left: 3rem;
margin-bottom: 2rem;

@media screen and (min-width: 600px) and (max-width: 768px){
    margin-left: 1rem;
    margin-bottom: 0;
    width: 55%;
    heigth: 45%;
}

@media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 0;
    width: 60%;
    heigth: 45%;
} 
`;

const ProfileDescription = styled.div`
margin-top: 0;
`;

const Description = styled.p`
font-size: 1.3rem;
padding: 3.5rem;

@media screen and (max-width: 768px){
   font-size: 1.3rem;
   padding: 1rem;
}
`;

const ProfileCV = styled.div`
background-color: transparent;
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
}
`;

const DivButton = styled.div`
  margin: 0 0.7rem;
`;

const CVButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  cursor: pointer;
  padding: 1.1rem 0.6rem;
  margin-top: 0;
  margin-bottom: 1rem;
  width: 17rem;

  &:hover{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    transition-timing-function: ease-out;
    transition-delay: 0.2s;
    transition-duration: 1s;
  }

  @media screen and (max-width: 768px){
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

class About extends React.Component{
  
    render(){
  
      return (
        
        <AboutWrapper id="about">
          
          <AboutTitle>
              About Me
          </AboutTitle>

          <ProfileWrapper>

            <ProfileImage src={photo}/>

            <ProfileDescription>
                
                <Description>
                    I am Rafael Greca and currently doing bachelor in Computer Science at Federal University of Itajubá (UNIFEI).
                    I am a self-taught Data Science and Machine Learning enthusiastic.
                    In my free time I like to study other languages (German and English) and stuff related to AI.
                    My hobbies are: bicycling and watching/playing basketball.
                </Description>

                <ProfileCV>

                    <DivButton>

                    <a href={PDF_english} target="_blank" rel="noopener noreferrer" download>
                    <CVButton>
                        Download C.V (English)
                    </CVButton>
                    </a>

                    </DivButton>

                    <DivButton>

                    <a href={PDF_portuguese} target="_blank" rel="noopener noreferrer" download>
                    <CVButton>
                        Download C.V (Portuguese)
                    </CVButton>
                    </a>

                    </DivButton>

                </ProfileCV>

            </ProfileDescription>

          </ProfileWrapper>

        </AboutWrapper>

      );
    }
  }
  
  export default About;