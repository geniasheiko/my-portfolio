import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';

type SkillPropsType = {
    iconId: string;
    title:string
}


export const Skill = (props:SkillPropsType) => {
    return (
   <StyledSkill>
    <IconWrapper>
        <Icon width={"75"} height={"75"} iconId={props.iconId}></Icon>
    </IconWrapper>
    <SkillTitle>{props.title}</SkillTitle>
   </StyledSkill>
    );
};
const StyledSkill = styled.div`
    height: 270px;
    width: 270px;
    border-radius: 29px;
    margin: 20px 10px 20px 10px ;
    background-color: ${theme.colors.primyriBg};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
         &:hover {
            transform: translateY(-10px);
            cursor: pointer;
        }

    @media ${theme.media.tablet} {
        height: 160px;
        width: 160px;
        gap: 25px;
        padding: 18px 25px 18px 28px;
    }   
    @media ${theme.media.mobile} {
        width: calc(50% - 30px);
    }
`
const IconWrapper = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SkillTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 300;
`