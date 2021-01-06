import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.7rem;
`;

const ProjectsTitle = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  border-bottom: 4px solid rgb(0, 0, 0);
  width: 20%;

  @media screen and (max-width: 768px){
    width: 50%;
  }
`;

const Project = styled.h3`
  font-weight: bolder;
  font-size: 1.5rem;
`;

class Projects extends React.Component{

  render(){

    return (

        <ProjectsWrapper>
        
            <ProjectsTitle>
                My Projects
            </ProjectsTitle>

            <Project>
                This section is still in development!
            </Project>

        </ProjectsWrapper>
    );
  }
}

export default Projects;