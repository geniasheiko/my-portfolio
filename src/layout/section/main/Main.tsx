import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { Button } from '../../../components/Button';


export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <TextBlock>
                <h3>HELLO</h3>
                <h2>I am Evgenia Melnik</h2>
                <p>I've been doing web design, front-end and back-end development for a year now.
                 Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                <Button>CONTACT ME</Button>
            </TextBlock>
            <PhotoWrapper>
<Photo src={photo} alt="" />
</PhotoWrapper>
</FlexWrapper>
</Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
padding: 100px 0;
   background-color: ${theme.colors.primyriBg};
`
const TextBlock = styled.div`
   max-width: 50%;
   text-align: left;
   
`
const PhotoWrapper = styled.div`
    position: relative;
    height: 400px;
    z-index: 0;
    margin: 40px 0;

    &::before{
        content: "";
       width: 300px;
        height:   440px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 34px;
        z-index: -1;
    }
`

const Photo = styled.img`
     object-fit: cover;
    width: 100%;
    height: 100%;
`