import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/images/photo1.jpg';
import backgroundFoto from '../../../assets/images/Ellips.png';
import { Photo } from '../../../components/photo/Photo';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { Text } from '../../../components/Text';
import { PhotoWrapper } from './PhotoWrapper';



export const AboutMe = () => {
    return (
        <AbotMeStyle>
            <Container>
<FlexWrapper justify={"center"} >
    <PhotoDouble>
        <PhotoWrapper>
    <Photo src={photo} width={"250px"} height={"280px"} 
    radius={"14px"} photoBorder={"15px solid #2C2C2C"} alt={"My photo"}></Photo>
    </PhotoWrapper>
    <PhotoWrapper bottom={"-40px"} top={"unset"}>
    <Photo src={photo} width={"250px"} height={"280px"} 
    radius={"14px"} photoBorder={"15px solid #2C2C2C"}
    alt={"My photo"}></Photo>
    </PhotoWrapper>
    </PhotoDouble>
    <TextBlock>
        <Title>About me</Title>
        <Text>Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
By trusting me, you will get the maximum return for your project, save your nerves and time.
If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
</Text>
        </TextBlock>
        <PhotoSingl>
        <PhotoWrapper left={"-35px"}>
    <Photo src={photo} width={"250px"} height={"280px"} 
    radius={"14px"} photoBorder={"15px solid #2C2C2C"}
    alt={"My photo"}></Photo>
     </PhotoWrapper>
     </PhotoSingl>
     
</FlexWrapper>
</Container>
</AbotMeStyle>
    );
};

const AbotMeStyle = styled.section`
    padding-bottom: 100px;
    background-color: ${theme.colors.substateBg};
    background-image: url(${backgroundFoto});
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const PhotoDouble = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     position: relative;
     /* bottom: -10px;*/
     right: -12px; 
     z-index: 1;
   `
 const Title = styled.h2`
 font-family: 'Josefin Sans', sans-serif;
 font-weight: 400px;
 font-size: 48px;
 color: ${theme.colors.font};
 position: relative;
 top: -30px;
 ` 
const TextBlock = styled.div`
    background-color:#2D2D2D;
    max-width: 400px;
    padding: 0 40px 20px 35px;
    border-radius: 14px;
    text-align: left;
    box-shadow: 1px 8px 8px rgba(0, 0, 0, 0.5);
`
const PhotoSingl = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    
`
