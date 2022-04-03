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
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
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
              <AiFillInstagram />
            </SocialIcons>
            <SocialIcons href="./" target="_blank">
              <FaLinkedinIn />
            </SocialIcons>
            <SocialIcons href="./" target="_blank">
              <FaTwitter />
            </SocialIcons>
          </SidebarIcons>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default NavElements;
