import React from 'react';
import styled from 'styled-components';
import { FaDesktop } from 'react-icons/fa';
import { FcStatistics } from 'react-icons/fc';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';

setConfiguration({ maxScreenClass: 'xl'});

const SkillsWrapper = styled.div`
    background-color: #efeeec;
    color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 0.7rem;
`;

const SkillsTitle = styled.h1`
    font-weight: bolder;
    font-size: 2rem;
    border-bottom: 4px solid rgb(0, 0, 0);
    width: 20%;

    @media screen and (max-width: 768px){
        width: 50%;
    }
`;

const Skill = styled.div`
    background-color: #fff;
    color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 20rem;
    heigth: 25rem;
    margin: 0.6rem 0.2rem;
    padding: 0.2rem;
    border: 1px solid rgb(0, 0, 0);
`;

const SkillName = styled.h3`
    font-weight: bolder;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    border-bottom: 2px solid rgb(0, 0, 0);
    width: 50%;
`;

const SkillNameDS = styled.h3`
    font-weight: bolder;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    padding-top: 1.35rem;
    border-bottom: 2px solid rgb(0, 0, 0);
    width: 50%;
`;

const SkillDescription = styled.p`
    font-size: 1rem;
    padding: 0.6rem 2rem;
    word-break: break-word;

    @media screen and (max-width: 768px){
        font-size: 1.1rem;
    }
`;

const Grid = styled.div`
    padding: 1.2rem;
`;

class Skills extends React.Component{
  
    render(){
  
      return (

          <SkillsWrapper>
          
              <SkillsTitle>
                  My Skills
              </SkillsTitle>

              <Grid>
              <Container>
                <Row>
                    <Col sm={'content'}>
                        <Skill>
                            <SkillName>
                                Web Development
                            </SkillName>

                            <FaDesktop size="1.8rem" />

                            <SkillDescription>
                                ReactJS, NextJS, HTML5, CSS3, JavaScript, SQL/MySQL, NodeJS and Git.
                            </SkillDescription>
                        </Skill>
                    </Col>
                    <Col sm={'content'}>
                        <Skill>
                            <SkillNameDS>
                                Data Science
                            </SkillNameDS>

                            <FcStatistics size="1.8rem" />

                            <SkillDescription>
                                Python, Pandas, Scikit-Learn, MatPlotLib, Seaborn, Web Scraping, Excel and Statistic.
                            </SkillDescription>
                        </Skill>
                    </Col>
                    <Col sm={'content'}>
                        <Skill>
                            <SkillName>
                                Machine Learning
                            </SkillName>

                            <GiArtificialIntelligence size="1.8rem" />

                            <SkillDescription>
                                Machine Learning Models (Regression, Classification and Clustering) and
                                Math.
                            </SkillDescription>
                        </Skill>
                    </Col>
                </Row>
              </Container>
              </Grid>

          </SkillsWrapper>
      );
    }
  }
  
  export default Skills;