import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { Skill } from './Skill';

export const Skills = () => {
    return (
    <StyledSkillWrapper>
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"react"} title={"React"} />
        <Skill iconId={"react"} title={"React"} />
    </StyledSkillWrapper>
       

    );
};

const StyledSkillWrapper = styled.section`
    display: flex;
    min-height: 100vh;
    background-color:#414141;
`