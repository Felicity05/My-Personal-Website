import React from 'react';
import { ReactComponent as NycSkyline } from '../assets/nyc_skyline.svg';
import { ReactComponent as Window } from '../assets/window_sunset.svg';
import { ReactComponent as Girl } from '../assets/girl-laptop-stool.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Container = styled.div`
    height: 850px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const GreetingContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 300px;
      margin-left: 150px;
`;

const ImageCluster = styled.div`
    display: flex;
    flex-direction: column;
    height: 857px;
    align-items: center;
    justify-content: flex-end;
`;

const BaseImageContainer = styled.div`
    position: absolute;
    top: 500px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: -1;
`;

export const Home = () => {

    return (
        <Wrapper>
            <Container>
                <GreetingContainer>
                    <p style={{ fontFamily: 'Aldrich', fontSize: 22 }}>Hi there, nice to see you here! I’m</p>
                    <h1 style={{ fontFamily: 'BadScript', fontSize: 62, color: '#51232A' }}>Arelys Alvarez</h1>
                    <p style={{ fontFamily: 'Aldrich', fontSize: 25 }}>Welcome to my personal site on the internet!</p>
                </GreetingContainer>
                <ImageCluster>
                    <Girl style={{ marginRight: '80px', position: 'absolute', bottom: 4 }} />
                    <Window />
                </ImageCluster>
            </Container>
            <BaseImageContainer>
                <NycSkyline style={{ backgroundBlendMode: 'overlay' }} />
            </BaseImageContainer>
        </Wrapper>
    );

};