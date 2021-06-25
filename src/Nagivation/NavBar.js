import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-items: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  font-size: 1.2em;
  margin: 0 2em;
  flex-grow: 1;
  &.active {
    color: #15cdfc;
  }
`;

export const NavLinkHome = styled(Link)`
  color: #fff;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  position: absolute;
  left: 10%;
  top: 0;
  &.active {
    color: #15cdfc;
  }
  @media screen and (max-width: 700 px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  width: 100%;
  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10%;
  top: 20%;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
