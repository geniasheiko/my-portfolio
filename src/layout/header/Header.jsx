import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "About me", "Portfolio", "Contact"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                    <Menu menuItems={items} />
                </FlexWrapper>
            </Container>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #2A2A2A;
    padding: 20px 0;
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 99999;
`
const LogoWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    gap: 10px;
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
 `