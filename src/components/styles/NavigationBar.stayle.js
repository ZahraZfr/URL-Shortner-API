import styled from "styled-components";

export const NavPanel = styled.div`
transition:all 0.3s;
padding: 100px 50px;
width:100%;
height:100% !important;
z-index:11;
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
background:${({ theme }) => theme.body};
color:white;
display:flex;
align-items:center;
justify-content:start;
flex-direction:column;

a{
    display:flex;
    align-items:center; 
    box-shadow: 1px 1.5px 2px 0.5px #d4d4d4;
    margin:15px;
    padding:10px 50px;
    width:90%;
    height:auto;
    align-item:center;
    text-decoration:none;
    color:${({ theme }) => theme.text};
    transition:all 0.3s;
    

    &:hover{
        box-sizing:border-box;
        border-bottom:3.2px solid rgb(254,200,2);
    }
    img{
        width:17px;
        margin-right:10px;
    }
}
@media only screen and (min-width: 668px) {
    display:none;
}
`