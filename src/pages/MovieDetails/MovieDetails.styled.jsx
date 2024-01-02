import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledSection = styled.section`
    width: 100%;
    background-color: #314049;
    margin-top: 20px;
`
export const StyledButtonDiv = styled.div`
    margin-top: 135px;
`
export const StyledNavLinkWrapper = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px 0;
`
export const StyledNavLink = styled(NavLink)`
    font-weight: 600;
    color: #BDEEE4;
    border-bottom: 1px solid #BDEEE4;
    padding-bottom:3px;
    transition: color 0.3s ease, border-color 0.3s ease ;
       
    &:hover{
        border-color:#1DAB91;
        color: #1DAB91;
    }
`

export const StyledH2 = styled.h2`
    text-align: center;
    font-size: 38px;
    padding: 30px 0;
`