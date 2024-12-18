import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';


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
                <button>CONTACT ME</button>
            </TextBlock>
<Photo src={photo} alt="" />
</FlexWrapper>
</Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
   background-color: ${theme.colors.primyriBg};
`
const TextBlock = styled.div`
   
`

const Photo = styled.img`
    width: 456px;
    height: 633.53px;
    object-fit: cover;
`