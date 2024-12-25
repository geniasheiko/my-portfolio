import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                                <a href="">
                                    <ListSpan>{item}</ListSpan>
                                </a>
                            </ListItem>
                })}
            </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
    display: block;
  }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99999;
background-color: rgba(44, 44, 44, 0.9);
display: none;

${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
`}

     ul{
        display: flex;
        gap: 30px;
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 25px; 
    right: 20px;
    width: 36px;
    height: 36px;
    z-index: 9999999;

    span{
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
       
        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
            transform: rotate(45deg) translateY(0);
        `}

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            top: 50%;
            left: -3%;
            transform: translateY(-15px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
        `}
    }
}
`
const ListItem = styled.li`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: ${theme.colors.font};
    a:hover {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 2px solid ${theme.colors.buttonBg}; 
    }
`
const ListSpan = styled.span`
    color: ${theme.colors.font};
`