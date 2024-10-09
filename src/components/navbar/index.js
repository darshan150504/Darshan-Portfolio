import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa"; // Import FaLaptopCode for the computer-related logo
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    height: 128px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 50px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    position: absolute;
    top: 105px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LinkedinButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const Spam = styled.div`
  padding: 0 2px;
  font-weight: bold;
  font-size: 30px;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: 20,
              cursor: "pointer",
            }}
          >
            <FaLaptopCode size="3rem" /> <Spam>Darshan's Portfolio</Spam>
          </a>
        </NavLogo>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </NavItems>

        <ButtonContainer>
          <LinkedinButton href={Bio.linkedin}>LinkedIn Profile</LinkedinButton>
        </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;