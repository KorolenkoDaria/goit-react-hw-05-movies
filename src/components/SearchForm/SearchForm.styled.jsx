import { styled } from "styled-components";

export const StyledForm = styled.form`
    width: 600px;
    margin: 135px auto 65px;
    display: flex;
`

export const StyledInput = styled.input`
    width: calc(100% - 85px);
    height: 45px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-top: 2px solid #1DAB91;
    border-bottom: 2px solid #1DAB91;
    border-left: 2px solid #1DAB91;
    border-right: none;
    padding-left: 16px;
    outline: none;
    &::placeholder {
        color: #314049; 
        opacity: 0.7; 
        font-size: 14px;

    }
`

export const StyledButton = styled.button`
    width: 85px;
    height: 45px;
    border-top: 2px solid #1DAB91;
    border-bottom: 2px solid #1DAB91;
    border-right: 2px solid #1DAB91;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    border-left: 1px solid #1DAB91;
    background-color: #BDEEE4;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #1DAB91;
    }

`

