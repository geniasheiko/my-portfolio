import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <TextBlock>
                <span>HELLO</span>
                <h2>I am Evgenia Melnik</h2>
                <span>I've been doing web design, front-end and back-end development for a year now.
                 Do you need a website design, site layout, or maybe a turnkey website? Then contact me</span>
                <button>CONTACT ME</button>
            </TextBlock>
<Photo src={photo} alt="" />
</FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
   // background-color: #414141;
`
const TextBlock = styled.div`
   
`

const Photo = styled.img`
    width: 456px;
    height: 633.53px;
    object-fit: cover;
`