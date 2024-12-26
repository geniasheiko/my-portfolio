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
              <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
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
   @media ${theme.media.tablet} {
    padding-bottom: 0;
   }
`
const TextBlock = styled.div`
   max-width: 50%;
   text-align: left;
   @media ${theme.media.tablet} {
    max-width: 100%;
    h2 {
        font-size: 27px;
    }
    h3 {
        font-size: 52px;
    }
    p {
        font-size: 18;
    }
   }
   
`
const PhotoWrapper = styled.div`
    position: relative;
    height: 400px;
    z-index: 0;
    margin: 40px 0;

    @media ${theme.media.tablet} {
        text-align: left;
    }

    &::before{
        content: "";
        width: 300px;
        height:   440px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 34px;
        z-index: -1;
        @media ${theme.media.mobile} {
            width: 274px;
            left: 20px;
        }
    }
`

const Photo = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    @media ${theme.media.mobile} {
        width: calc(100% - 35px);
        }
`