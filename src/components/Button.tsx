import styled from "styled-components";
import { theme } from "../styles/Theme";

 export const Button = styled.button`
 font-weight: 700;
 font-size: 18px;
 text-transform: uppercase;
 width: 200px;
 height: 47px;
 background-color: ${theme.colors.buttonBg};
 border-radius: 6px;
 box-shadow: 2px 2px 5px rgba(226, 163, 0, 0.5);
 cursor: pointer;
 margin-top: 10px;
`