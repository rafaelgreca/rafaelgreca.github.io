import React from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: transparent;
  height: 3.4rem;
  z-index: 100;
  padding: 1.3rem calc((100vw - 1000px)/5);
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;

  &:hover{
    border-bottom: 3px solid #fff;
    font-weight: bold;
  }
`;

const LinkHome = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
     display: block;
     position: absolute;
     right: 0;
     padding-top: 0.6rem;
     padding-right: 2rem;
     cursor: pointer;
     font-size: 1.8rem;
  }

  &:hover{
    color: rgb(140, 140, 140);
  }

`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

const Sidebar = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #000;
 display: grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Close = styled(FaTimes)`
  color: #fff;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover{
    color: rgb(140, 140, 140);
  }
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(5, 60px);
 text-align: center;

 @media screen and (max-width: 480px){
   grid-template-rows: repeat(5, 40px);
 }
`;

const SidebarLink = styled.a`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 2rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer;

 &:hover {
  color: rgb(140, 140, 140);
  transition: 0.2s ease-in-out;
 }

 @media only screen and (max-width: 600px) {
  margin-right: 3rem;
  padding: 0;
} 
`;

const Navbar = ({ openSidebar, isOpen }) => {

    return (
        <>
        <Nav>
            <LinkHome href="/">
                <h1>GRECA</h1>    
            </LinkHome>
            <Bars onClick={openSidebar}/>
            <NavMenu>
                <Link href="/">
                    Home    
                </Link>
                <Link href="#about">
                    About    
                </Link>
                <Link href="#projects">
                    Projects    
                </Link>
                <Link href="#skills">
                    Skills    
                </Link>
                <Link href="#contact">
                    Contact    
                </Link>
            </NavMenu>
        </Nav>
        <Sidebar isOpen={isOpen} onClick={openSidebar}>
          <Close onClick={openSidebar}/>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink href="/" exact>
                Home
              </SidebarLink>
              <SidebarLink href="#about">
                About
              </SidebarLink>
              <SidebarLink href="#projects">
                Projects
              </SidebarLink>
              <SidebarLink href="#skills">
                Skills
              </SidebarLink>
              <SidebarLink href="#contact">
                Contact
              </SidebarLink>
            </SidebarMenu>
          </SidebarWrapper>
        </Sidebar>
        </>
    )
}

export default Navbar;
