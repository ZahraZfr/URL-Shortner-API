import styled from "styled-components";


export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export const Wrapper = styled.section`
    background: #fff;
    height:60px;
    display: flex;
    align-items: center;
    justify-content:center;
    box-sizing: border-box;

    


    a{
       color:rgb(44,68,78);
       text-decoration:none;
       margin:10px 15px;
       cursor:poiner;
       transition:all 0.2s ease;
       text-shadow: 0.5px 0.5px 2px #e1e3e6;
       box-shadow: 0.5px 0.5px 2px 0.5px #7f7f7f;
       padding-bottom:4px;
       text-align:center;
       padding:5px 12px;
       border-radius:6px 12px;
        
        &:hover{
            color:black;
            border-bottom:3px solid rgb(254,200,2);
        }

        img{
            width:17px;
            margin:5px 5px 0 0;
            height:auto;
            color:rgb(44,68,78);
        }
    }
`;