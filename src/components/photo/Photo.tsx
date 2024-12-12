import React from 'react';
import styled from 'styled-components';

type PhotoPropsType = {
    src?: string
    width?: string
    height?: string
    alt?: string
    }

    export const Photo = (props:PhotoPropsType) => {
        return (

            <StyledPhoto src={props.src} width={props.width}
            height={props.height}  alt={props.alt}></StyledPhoto> 
        );
    };

    const StyledPhoto = styled.img<{width?: string; height?: string}>`
        width: ${({ width }) => width || 'auto'};
        height: ${({ height }) => height || 'auto'};
    `