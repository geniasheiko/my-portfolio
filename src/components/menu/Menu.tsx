import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                                <a href="">
                                    <ListSpan>{item}</ListSpan>
                                </a>
                            </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        list-style: none;
        padding: 0;
        margin: 0;
    }
  @media ${theme.media.tablet} {
    display: none;
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