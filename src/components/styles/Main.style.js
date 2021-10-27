import styled from "styled-components";

export const MainHolder = styled.div`
    text-align: center;
    color: palevioletred;
    display:flex;
    justify-content:space-between;
    align-item:center;
    margin:0 3em;

    img {
        max-width: 40%;
    }

    form{
        width:50%;
        padding-top:100px;

        div{
            display:flex;

            input{
                flex:1;
                height:50px;
                padding:0 5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

            }
            button{
                width:15%
            }
        }

        section{
            display:flex;
            margin:15px;
            

            p{
                flex:1;
                height:15px;
            }
            button{
                width:25%
            }
        }
    }

`;