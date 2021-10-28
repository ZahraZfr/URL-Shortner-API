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
        font-family: 'Source Sans Pro', sans-serif;

        div{
            display:flex;

            input{
                flex:1;
                height:50px;
                padding:0 3px 0 7px;
                margin-right:5px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                border:none;
                outline:none;
                box-shadow: 2px 2px 5px rgb(0,0,0,.3);

            }
            button{
                width:15%;
                border:none;
                outline:none;
                background-color: rgb(254,200,2);
                box-shadow: 2px 2px 5px rgb(0,0,0,.3);
                font-weight:900;
                color:rgb(44,68,78);
                font-family: 'Source Sans Pro', sans-serif;
                font-size:18px;

                &:hover{
                    cursor: pointer;
                    transform: scale(1.02);
                    box-shadow: 2px 2px 5px rgb(0,0,0,.53);
                    
                }
            }
        }

        section{
            display:flex;
            margin:30px;
            height:50px;
            line-height:50px;
            

            p{
                flex:1;
                height:30px;
                margin:0;
                
            }
            button{
                height:30px;
                width:80px;
                border:none;
                outline:none;
                background-color: rgb(44,68,78);
                color:rgb(254,200,2);;
                box-shadow: 2px 2px 5px rgb(0,0,0,.3);
                font-weight:700;

                &:hover{
                    cursor: pointer;
                    transform: scale(1.02);
                    box-shadow: 2px 2px 5px rgb(0,0,0,.53);
                }
               
            }
        }
    }

`;