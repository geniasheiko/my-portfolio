import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Text } from '../Text';

export const Logo = () => {
    return (
        <Link href="">
            <Icon iconId={'code'} width={"54px"} height={"38px"} />
            <Text weight={"600"} size={"22px"}>Evgenia</Text>
        </Link>
    );
};

const Link = styled.a`
    display: flex;
    align-items: center;
`