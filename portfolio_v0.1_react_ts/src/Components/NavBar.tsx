import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Signature } from '../assets/Signature.svg';
import './navStyles.css';

const NavBarContainer = styled.div`
   position: fixed;
   z-index: 2;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 80%;
   top: 5vh;
   left: 0;
   right: 0;
   margin: auto;
`;

const menuLinks = [
    { elementName: 'Home', path: '/', slidingSpeed: 0.8 },
    { elementName: 'About', path: '/about', slidingSpeed: 0.9 },
    { elementName: 'Experience', path: '/experience', slidingSpeed: 1.0 },
    { elementName: 'Projects', path: '/projects', slidingSpeed: 1.1 },
    { elementName: 'Contact', path: '/contact', slidingSpeed: 1.2 }
];

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <NavBarContainer>
            <Link to={'/'}>
                <Signature onClick={() => setMenuOpen(!menuOpen)} className={'logo'} />
            </Link>
            <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                <div className={menuOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
                    <span className={menuOpen ? 'lineTop spin' : 'lineTop'} />
                    <span className={menuOpen ? 'lineMiddle disapear' : 'lineMiddle'} />
                    <span className={menuOpen ? 'lineBottom spin' : 'lineBottom'} />
                </div>
            </div>

            <div className='menu-overlay'
                 style={{
                     right: menuOpen ? '0' : '-100%',
                     transitionDelay: menuOpen ? '0s' : '0s'
                 }}>
                <ul className='nav-links'>
                    {menuLinks.map((link) => {
                        return (
                            <li className='nav-item'>
                                <Link
                                    to={link.path}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    style={{
                                        left: menuOpen ? '0' : '85rem',
                                        transitionDelay: menuOpen ? `${link.slidingSpeed}s` : '0s'
                                    }}>
                                    {link.elementName}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </NavBarContainer>
    );
};
