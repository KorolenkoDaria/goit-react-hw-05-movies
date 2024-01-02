import { styled } from "styled-components";

export const StyledButton = styled.button`
background-color: inherit;
font-weight: 600;
border: none;
padding-bottom: 3px;
border-bottom: 1px solid #BDEEE4;
color: #BDEEE4;
transition: color 0.3s ease, border0.3s ease;
    &:hover{
        color: #1DAB91;
        border-bottom: 1px solid #1DAB91;
    }
`