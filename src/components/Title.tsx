import styled from "styled-components";

type TitlePropsType = {
    size?:string
    weight?:string
    color?: string
    lineHeight?: string
}

export const Title = styled.h3<TitlePropsType>`
  font-size: ${(props) => props.size || "48px"};
  font-weight: ${(props) => props.weight || "400"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  color: ${(props) => props.color || "#E4E4E4"};
  `;