import React from 'react'
import Navbar from '../components/navbar/navbar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { light, dark } from '../components/theme';
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
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
}
`;

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {'isOpen' : false, 'currentTheme': 'dark'};
        this.openSidebar = this.openSidebar.bind(this);
        this.switchTheme = this.switchTheme.bind(this);
    }

    openSidebar(){
        
        this.setState({isOpen : !this.state.isOpen});
    }

    switchTheme(){

        if(this.state.currentTheme === 'dark'){
            this.setState({currentTheme : 'light'});
        }else{
            this.setState({currentTheme : 'dark'});
        }
        
    }
    
    render(){

        return (
            <ThemeProvider theme={this.state.currentTheme === 'dark' ? dark : light}>
                <>
                <GlobalStyle />
                <Navbar currentTheme={this.state.currentTheme} changeTheme={this.state.currentTheme === 'dark' ? 'Light Theme' : 'Dark Theme'} isOpen={this.state.isOpen} openSidebar={this.openSidebar} onChange={this.switchTheme}/>
                <HomePage currentTheme={this.state.currentTheme} />
                <About currentTheme={this.state.currentTheme} />
                <Projects currentTheme={this.state.currentTheme} />
                <Skills currentTheme={this.state.currentTheme} />
                <Contact currentTheme={this.state.currentTheme} />
                <Footer currentTheme={this.state.currentTheme} />
                </>
            </ThemeProvider>
        );
    }

}

export default Home;