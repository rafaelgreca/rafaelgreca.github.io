import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
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

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;

  &.active{
    color: ${({ theme }) => theme.text};
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  &:hover{
    border-bottom: 2px solid ${({ theme }) => theme.text};
    font-weight: bold;
  }
`;

const LinkHome = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  height: 100%;
  padding: 0 1.5rem;
`;

const Bars = styled(FaBars)`
  display: none;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 768px){
     display: block;
     position: absolute;
     right: 0;
     padding-top: 0.6rem;
     padding-right: 2rem;
     cursor: pointer;
     font-size: 1.8rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;
/*
const NavSwitch = styled.nav`
 display: flex;
 align-items: center;
 margin-rigth: 24px;

 @media screen and (max-width: 768px){
   display: none;
 }
`;

const NavSwitchLink = styled(LinkS)`
 padding: 10px 22px;
 background: transparent;
 border: none;
 outline: none;
 cursor: pointer;
 text-decoration: none;
 transition: all 0.2s ease-in-out;
  
  &:hover{
    border-bottom: 2px solid ${({ theme }) => theme.text};
    font-weight: bold;
  }
`;
*/
const Sidebar = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: ${({ theme }) => theme.background};
 display: grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Close = styled(FaTimes)`
  color: ${({ theme }) => theme.text};
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: ${({ theme }) => theme.text};
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

const SidebarSwitch = styled.div`
 display: flex;
 justify-content: center;
`;

/*
const SidebarSwitchButton = styled(LinkS)`
 border-radius: 4px;
 padding: 5px 64px;
 white-space: nowrap;
 background: transparent;
 font-size: 1.5rem;
 border: none;
 outline: none;
 cursor: pointer;
 text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.hover};
    transition: 0.2s ease-in-out;
  }
`;
*/
const SidebarLink = styled(LinkS)`
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: ${({ theme }) => theme.text};
 cursor: pointer;

 &:hover {
  color: ${({ theme }) => theme.hover};
  transition: 0.2s ease-in-out;
 }
`;

const Navbar = ({ currentTheme, changeTheme, openSidebar, isOpen, onChange }) => {

    return (
        <>
        <Nav theme={currentTheme}>
            <LinkHome to="/">
                <h1>GRECA</h1>    
            </LinkHome>
            <Bars onClick={openSidebar}/>
            <NavMenu>
                <Link to="home">
                    Home    
                </Link>
                <Link to="about">
                    About    
                </Link>
                <Link to="works">
                    Works    
                </Link>
                <Link to="skills">
                    Skills    
                </Link>
                <Link to="contact">
                    Contact    
                </Link>
                {/*
                <NavSwitch>
                    <NavSwitchLink onClick={onChange}>
                      {changeTheme}
                    </NavSwitchLink>
                </NavSwitch>*/}
            </NavMenu>
        </Nav>
        <Sidebar isOpen={isOpen} onClick={openSidebar}>
          <Close onClick={openSidebar}/>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="home">
                Home
              </SidebarLink>
              <SidebarLink to="about">
                About
              </SidebarLink>
              <SidebarLink to="works">
                Works
              </SidebarLink>
              <SidebarLink to="skills">
                Skills
              </SidebarLink>
              <SidebarLink to="contact">
                Contact
              </SidebarLink>
              <SidebarSwitch>
              {/*
              <SidebarSwitchButton onClick={onChange}>
                {changeTheme}
              </SidebarSwitchButton>*/}
            </SidebarSwitch>
            </SidebarMenu>
          </SidebarWrapper>
        </Sidebar>
        </>
    )
}

export default Navbar;
