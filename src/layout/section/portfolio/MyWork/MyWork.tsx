import React from 'react';
import styled from 'styled-components';
import portfolio from '../../../../assets/images/portfolio.jpg'; 
import afterLink from '../../../../assets/images/vector/arrow.svg';
import { Text } from '../../../../components/Text';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Container } from '../../../../components/Container';
import { theme } from '../../../../styles/Theme';
import { Title } from '../../../../components/Title';

export const MyWork = () => {
    return (
        <MyWorkConteiner>
            <FlexWrapper justify={"center"} align={"center"}>
                <Container>
                    <Title>PORTFOLIO</Title>
                    <ContentWrapper>                      
                        <Photo src={portfolio} alt={"My photo"}></Photo>        
                        <TextWrapper>
                            <SubTitle>Landing Ice-cream</SubTitle>
                            <Text size={"18px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. 
                            Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. 
                            Cras enim purus, tempor sed massa vel, accumsan bibendum magna. 
                            Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</Text>
                            <Link href={"#"}>More</Link>
                        </TextWrapper>
                    </ContentWrapper>         
                </Container>
            </FlexWrapper>
        </MyWorkConteiner>
    );
};

const MyWorkConteiner = styled.div`
    background-color: ${theme.colors.primyriBg};
    padding: 100px 15px 150px;
`
const ContentWrapper = styled.div`
    background-color: ${theme.colors.substateBg};
    padding: 50px;
    width: 970px;
    border-radius: 29px;
    margin: 10px;
    display: flex;
    flex-direction: row;
`
const SubTitle = styled.h4`
    font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 25px;
    font-size:24px;
    font-weight: 300;
`
const TextWrapper = styled.div`
    padding: 32px 32px 32px 81px;
`
const Photo = styled.img`
    border-radius: 29px;
    width: 500px; 
    height: 490px;
`
const Link = styled.a`
    display: block;
    color: ${theme.colors.buttonBg};
    font-weight: 300;
    font-size: 18px;
    margin-top: 25px;
    &:after {
        content: url(${afterLink});
        margin-left: 7px;
    }
`
