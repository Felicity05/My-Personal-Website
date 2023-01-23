import styled from "styled-components";
import {Link, To, useNavigate} from "react-router-dom";
import {useState} from "react";
import {ReactComponent as CloseIcon} from "../assets/clear-black-18dp 1.svg";


const MenuContainer = styled.div`
    background-color: pink;
    color: green;
    border: 3px;
    border-style: solid;
    border-color: black;
`

export const SlidingMenu = ({setIsOpen}: any) => {
    const navigate = useNavigate();

    const handleClick = (toPage: To) => {
        setIsOpen(false);
        navigate(toPage);
    }

  return(
    <MenuContainer>
        <CloseIcon onClick={setIsOpen(false)}/>
        <h1 onClick={() => handleClick('/about')}>About</h1>
        {/*<h1 onClick={() => navigate('/experience')}>Experience</h1>*/}
        {/*<h1 onClick={() => navigate('/projects')}>Projects</h1>*/}
        {/*<h1 onClick={() => navigate('/contact')}>Contact</h1>*/}
        {/*<h1 onClick={() => navigate('/')}>Resume</h1>*/}
        {/*<h1 onClick={() => navigate('/blog')}>Blog</h1>*/}
    </MenuContainer>
  )
}