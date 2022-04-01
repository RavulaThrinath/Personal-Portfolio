import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #ffffff;
  display: grid;
  align-items: center;
  border: 10px solid #1d1d1d;
  top: 0;
  left: 0;
  transition: 0.1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #1d1d1d;
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
  margin-right: 15px;
  color: #000000;
  text-decoration: none;
  font-size: 15px;
  border: 1px solid #c7c7c7;
  padding: 7px;
  border-radius: 100px;
  line-height: 6px;
  &:hover {
    color: #ffffff;
    border: 1px solid #ffffff;
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
  font-weight: 800;
  text-decoration: none;
  list-style: none;
  transition: all.2s ease-in-out;
  color: #000000;
  font-family: "Commissioner";
  cursor: pointer;

  &:hover {
    color: #27496d;
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
