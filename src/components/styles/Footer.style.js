import styled from "styled-components";

export const FooterHolder = styled.div`
    width:100%;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    position:fixed;
    bottom:0;
    color: #ffbf00;
    background-color:rgb(44,68,78);
    font-weight:thin;
    box-shadow: -2px -2px 5px 0.5px #ffbf00;
    margin-top:100px;

    @media only screen and (max-width: 668px){
        font-size:15px;
    }
`