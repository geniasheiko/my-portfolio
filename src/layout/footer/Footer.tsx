import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Text } from '../../components/Text';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "About me", "Portfolio", "Contact"]

export const Footer = () => {
    return (
        <FooterConteiner>
            <Container>
                <FlexWrapper 
                    justify={"space-between"} 
                    width={"775px"}
                    margin={"0 auto"}>
                    <FooterMenuWrapp>
                        <Menu menuItems={items}></Menu>
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
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin: 0;
    line-height: 1.6;
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`
const FooterMenuWrapp = styled.div` 
    nav ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        li {
            font-size: 20px;
        }
    }
`