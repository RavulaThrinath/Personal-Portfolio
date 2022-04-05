import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarIcons,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SocialIcons,
} from "./RHeaderStyle";
import {
  AiFillFacebook,
  // AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
// import { socialMediaLinks } from "../../../Data";

const NavElements = ({ isOpen, toggle }) => {
  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/">Home</SidebarLink>
            <SidebarLink to="/about">About</SidebarLink>
            <SidebarLink to="/works">Works</SidebarLink>
            <SidebarLink to="/blogs">Blogs</SidebarLink>
            <SidebarLink to="/contact">Contact</SidebarLink>
          </SidebarMenu>
          <SidebarIcons>
            <SocialIcons href="./" target="_blank">
              <AiFillFacebook />
            </SocialIcons>
            <SocialIcons href="./" target="_blank">
              <AiFillTwitterSquare />
            </SocialIcons>
            <SocialIcons href="./" target="_blank">
              <AiFillLinkedin />
            </SocialIcons>
          </SidebarIcons>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default NavElements;
