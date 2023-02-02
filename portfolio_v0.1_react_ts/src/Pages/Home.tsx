import React, { useEffect } from 'react';
import { ReactComponent as NycSkyline } from '../assets/nyc_skyline.svg';
import { ReactComponent as Girl } from '../assets/Group 12.svg';
import styled from 'styled-components';
import './styles/home.css';
import scrollToElement from 'scroll-to-element';
import nightStars from '../assets/night-stars.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100vh;
    background: linear-gradient(155deg,
    rgba(83, 85, 214, 1) 20%,
    rgba(155, 97, 188, 1) ,
    rgba(238, 110, 159, 1),
    rgba(255, 209, 134, 1) );
    
`;

const Container = styled.div`
   width: 80%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   margin: 0 auto;
`;

const GreetingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-bottom: 300px;
   z-index: 1;
`;

const ImageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   z-index: 1;
`;

const BackgroundImageContainer = styled.div`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
`;

export const Home = () => {
    useEffect(() => {
        scrollToElement('#contact');
    }, []);

    return (
        <>
            <section style={{ height: '100vh' }}>
                <Wrapper>
                    <img src={nightStars} alt={'night'}
                         style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }} />
                    <Container>
                        <GreetingContainer>
                            <p style={{ fontFamily: 'Aldrich', fontSize: 22 }}>Hi there, nice to see you here! I’m</p>
                            <h1 style={{
                                fontFamily: 'BadScript',
                                fontSize: 62,
                                color: '#E8D8D3',
                                fontWeight: 300
                            }}>Arelys Alvarez</h1>
                            <p style={{ fontFamily: 'Aldrich', fontSize: 25 }}>Welcome to my personal site on the
                                internet!</p>
                        </GreetingContainer>
                        <ImageContainer>
                            <Girl />
                        </ImageContainer>
                        <BackgroundImageContainer>
                            <NycSkyline style={{ backgroundBlendMode: 'overlay' }} />
                        </BackgroundImageContainer>
                    </Container>
                </Wrapper>
            </section>
        </>
    );
};
