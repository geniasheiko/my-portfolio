import React from 'react';
import styled from 'styled-components';

type PhotoPropsType = {
    src?: string
    width?: string
    height?: string
    alt?: string
    radius?: string
    photoBorder?: string
}

    export const Photo = (props:PhotoPropsType) => {
        return (

            <StyledPhoto src={props.src} width={props.width}
            height={props.height} radius={props.radius}
            photoBorder={props.photoBorder}
            alt={props.alt}></StyledPhoto> 
        );
    };

    const StyledPhoto = styled.img<{width?: string; height?: string; radius?: string; photoBorder?: string }>`
        width: ${({ width }) => width || 'auto'};
        height: ${({ height }) => height || 'auto'};
        border-radius: ${({radius}) => radius };
        border: ${({photoBorder}) => photoBorder };
    `