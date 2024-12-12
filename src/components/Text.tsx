import styled from "styled-components";

type TextPropsType = {
    size?:string
    weight?:string
    color?: string
    lineHeight?: string
}

export const Text = styled.p<TextPropsType>`
    font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.weight || "300"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  color: ${(props) => props.color || "#FFFFFF"};
`