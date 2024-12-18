import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Text } from '../../components/Text';
import { Logo } from '../../components/logo/Logo';

const items = ["Home", "About me", "Portfolio", "Contact"]

export const Footer = () => {
    return (
        <FooterConteiner>
            <Menu menuItems={items}></Menu>
            <Contact>
                <Text>Email: geniasheiko@gmail.com</Text>
                <Text>Telegram: @MelEvgenia</Text>
                <Text>Phone: +38 093 029 70 85</Text>
            </Contact>
            <LogoContainer>
           <Logo></Logo>
           <Text>Copyright © 2021, Nottonic</Text>
           </LogoContainer>
        </FooterConteiner>
    );
}

const FooterConteiner = styled.footer`
 background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`
const Contact = styled.div`
     margin: 0;
     line-height: 1.6;
`
const LogoContainer = styled.div`
    
`