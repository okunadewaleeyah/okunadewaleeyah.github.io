import React from 'react'
import { SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink,
    SidebtnWrap, 
    SidebarRoute 
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen= {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick = {toggle}>About</SidebarLink>
                    
                    <SidebarLink to="challenges" onClick = {toggle}>Challenges</SidebarLink>

                    <SidebarLink to="contact" onClick = {toggle}>Contact</SidebarLink>

                    <SidebarLink to="login" onClick = {toggle}>Log In</SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to="/">Sign Up</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
