import { Home } from '../Pages/Home';
import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from './NavBar';
import styled from 'styled-components';

const Container = styled.div`
   margin: 0 auto;
   height: 100vh;
`;

const NavBarContainer = styled.div`
   margin: auto;
`;

export const Layout: FC = () => {
    const location = useLocation();

    return (
        <Container>
            {/* Your layout code here, e.g. a navigation menu */}
            <NavBarContainer>
                {/* navbar here */}
                <NavBar />
            </NavBarContainer>
            {location.pathname === '/' ? <Home /> : <Outlet />}
        </Container>
    );
};
