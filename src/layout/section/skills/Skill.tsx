import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';

type SkillPropsType = {
    iconId: string;
   title:string
}


export const Skill = (props:SkillPropsType) => {
    return (
   <StyledSkill>
    <Icon iconId={props.iconId}></Icon>
    <SkillTitle>{props.title}</SkillTitle>
   </StyledSkill>
    );
};
const StyledSkill = styled.div`
height: 270px;
width: 270px;
border-radius: 29px;
    background-color: #2A2A2A;
`
const SkillTitle = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: 300;
`