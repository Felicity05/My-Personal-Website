import { ReactComponent as Signature } from '../assets/Signature.svg';
import { ReactComponent as MenuIcon } from '../assets/MenuIcon.svg';
import { Home } from '../Pages/Home';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SlidingMenu } from './SlidingMenu';

const Container = styled.div`
    margin: 0 auto;
    height: 100vh;
    padding-top: 80px;
`;
const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1480px;
    margin: auto;
`;

export const Layout: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            {isOpen ? <SlidingMenu setIsOpen={setIsOpen} /> :
                <>
                    <NavBarContainer>
                        {/* Your layout code here, e.g. a navigation menu */}
                        <Signature onClick={() => {
                            navigate('/');
                        }} style={{ cursor: 'pointer' }} />
                        <MenuIcon onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }} />
                    </NavBarContainer>
                    {location.pathname === '/' ? <Home /> : <Outlet />}
                </>
            }
        </Container>
    );
};