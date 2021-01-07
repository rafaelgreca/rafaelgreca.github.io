import React from 'react'
import Navbar from '../components/navbar/navbar';
import { createGlobalStyle } from 'styled-components';
import HomePage from '../components/home/homepage';
import Footer from '../components/footer/footer';
import Contact from '../components/contact/contact';
import About from '../components/about/about';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';

const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Roboto';
    padding: 0;
    margin: 0;
    background-color: #000;
    color: #fff;
    transition: all 0.2s linear;
}
`;

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {'isOpen' : false};
        this.openSidebar = this.openSidebar.bind(this);
    }

    openSidebar(){
        this.setState({isOpen : !this.state.isOpen});
    }
    
    render(){

        return (
            <>
                <GlobalStyle />
                <Navbar isOpen={this.state.isOpen} openSidebar={this.openSidebar} />
                <HomePage />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </>
        );
    }

}

export default Home;