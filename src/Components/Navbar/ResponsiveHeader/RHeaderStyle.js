import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #0d1117;
  display: grid;
  align-items: center;
  border: 10px solid #12171f;
  top: 0;
  left: 0;
  transition: 0.1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffffff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
export const SidebarIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SocialIcons = styled.a`
  margin-right: 10px;
  color: #f0f6fc;
  text-decoration: none;
  font-size: 20px;
  /* padding: 7px; */
  &:hover {
    color: #ffffff;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
  transition: all.2s ease-in-out;
  color: #f0f6fc;
  font-family: "Inter", sans-serif;
  cursor: pointer;

  &:hover {
    color: #7f78d2;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 698px) {
    grid-template-rows: repeat(5, 60px);
    padding: 0px !important;
    margin: 0 !important;
  }
`;
