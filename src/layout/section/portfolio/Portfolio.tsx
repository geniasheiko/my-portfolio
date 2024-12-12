import React from 'react';
import styled from 'styled-components';
import { MyWork } from './MyWork/MyWork';
import { Title } from '../../../components/Title';

export const Portfolio = () => {
    return (
        <PortfolioStyled>
            <Title>Portfolio</Title>
            <MyWork/>
                
                
          
        </PortfolioStyled>

    );
};

const PortfolioStyled = styled.div`
   background-color: black ;
`
