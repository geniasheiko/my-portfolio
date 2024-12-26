import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Text } from '../../components/Text';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <FooterConteiner>
            <Container>
                <FlexWrapper
                    justify={"space-between"} 
                    width={"775px"}
                    margin={"0 auto"}>
                        <FooterMenuWrapp>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About me</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        </FooterMenuWrapp>
                        <Contact>
                            <Text>Contact</Text>
                            <Text>Email: geniasheiko@gmail.com</Text>
                            <Text>Telegram: @MelEvgenia</Text>
                            <Text>Phone: +38 093 029 70 85</Text>
                        </Contact>
                    <LogoContainer>
                        <Logo></Logo>
                        <Text>Copyright © 2024, Evgenia</Text>
                    </LogoContainer>
                </FlexWrapper>
            </Container>
        </FooterConteiner>
    );
}

const FooterConteiner = styled.footer`
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 50px 0;
    ${FlexWrapper} {
        @media ${theme.media.tablet} {
            flex-direction: column;
gap: 50px
        }
}
    `
    const FooterMenuWrapp = styled.div` 
     ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        li a{
            font-family: 'Josefin Sans', sans-serif;
            font-size: 20px;
            color: ${theme.colors.font};
            @media ${theme.media.mobile} {
            font-size: 18px;
                                         }
            }
        }
    `
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin: 0;
    line-height: 1.6;
    ${Text} {
        @media ${theme.media.mobile} {
            font-size: 18px;
        }
    }
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    ${Text} {
        @media ${theme.media.mobile} {
            font-size: 18px;
        }
    }
`

