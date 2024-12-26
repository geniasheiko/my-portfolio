import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { Skill } from './Skill';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Skills = () => {
    return (
        <StyledSkillWrapper>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} wrap={"wrap"}>
                    <Skill iconId={"react"} title={"React"} />
                    <Skill iconId={"react"} title={"React"} />
                    <Skill iconId={"react"} title={"React"} />
                    <Skill iconId={"react"} title={"React"} />
                    <Skill iconId={"react"} title={"React"} />
                    <Skill iconId={"react"} title={"React"} />
                    <Skill iconId={"react"} title={"React"} />
                </FlexWrapper>
            </Container>
        </StyledSkillWrapper>
           );
        };

const StyledSkillWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color:#414141;
`