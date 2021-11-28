import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 280px) {
        padding: 0 12px;
    }
`
//  color: rgb(140, 110, 38)
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: rgb(121, 104, 54);
        transition: all 0.2s ease-in-out;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    margin: 2px;
`

export const Input = styled.input `
    display: flex;
    align-items: center;
    width: 70%;
    height: 33%;
    border-radius: 5px;
    background: #fff;
    margin-top: 26px;
    margin-left: 20px;
    margin-right: 50px;
    padding: 0 1rem;
    font-size: 15px;
    border: none;
    box-sizing: border-box; 
    outline: none;
    
    &:focus {
        outline: none;
    }

    @media screen and (max-width: 280px) {
        display: none;
    }
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 10px;
    height: 100%;
    cursor: pointer;
    justify-content: space-between;

    &:active {
        border-bottom: 3px solid #FFD700;
    }

    &:hover {
        color: rgb(121, 104, 54);
        transition: all 0.2s ease-in-out;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 5px;
    background: rgb(140, 110, 38);
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: ponter;
    transitioin: 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        traansition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`
// rgb(140, 110, 38)