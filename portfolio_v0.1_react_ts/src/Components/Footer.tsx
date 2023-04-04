import styled from "styled-components";

const Container = styled.div`
    background-color: #23262C;
    height: 75px;
`

const TextGroup = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
    color: #EBE7E7;
  
`

export const Footer = () => {
  return(
      <Container>
          <TextGroup>
              <p>Made with love by Arelys Alvarez.</p>
              <p>Copyright 2023.</p>
              <p>GithubIcon LinkedInIcon</p>
          </TextGroup>
      </Container>
  )
}