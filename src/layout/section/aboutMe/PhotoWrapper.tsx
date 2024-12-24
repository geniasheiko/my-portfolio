import styled from 'styled-components';
import { isPropertySignature } from 'typescript';

type PhotoWrapperPropsType = {
    //border?: string
    justify?: string
    borderRadius?: string
    position?: string
    top?: string
    right?: string
    left?: string
    bottom?: string
    
}

export const PhotoWrapper = styled.div<PhotoWrapperPropsType>`
    
    justify-content: ${props =>props.justify || "center"};
    border-radius: ${props =>props.borderRadius|| "14px"};
    position: ${props =>props.position || "relative"};
    top: ${props =>props.top || "-40px"};
    right: ${props =>props.right || "-35px"};
    left: ${props =>props.left || "0"};
    bottom: ${props =>props.bottom || "0"};
`