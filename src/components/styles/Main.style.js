import styled from "styled-components";

export const MainHolder = styled.div`
@media only screen and (max-width: 1228px) {
    background-color:red;
  }


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


        h1{
            color:rgb(44,68,78);
            font-size:3.5rem;
            font-weight:800;
            line-height:50px;
            text-align:left;
            margin-bottom:20px;
        }
        h3{
            color:rgb(44,68,78);
            text-align:left;
            padding-left:20px;
            margin-bottom:50px;
        }

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
            height:70px;
            text-align:center;
            display:flex;
            align-items:center;
            padding:12px;
            margin:30px;
            box-shadow: 2px 2px 5px rgb(0,0,0,.23);
       
            

            div{
                display:flex;
                align-items:start;
                padding:15px 0;
                width:100%;
                flex-direction:column;

                h5{
                    font-size:13.5px;
                    color:rgb(44,68,78);
                }

                p{
                    flex:1;
                    height:30px;
                    margin:1px 0;
                    
                }
                
    
            }

           
            button{
                height:30px;
                line-height:30px;
                width:80px;
                border:none;
                outline:none;
                background-color: rgb(44,68,78);
                color:rgb(254,200,2);
                box-shadow: 2px 2px 5px rgb(0,0,0,.3);
                font-weight:700;
                text-align:center;
                border-radius:15px;

                &:hover{
                    cursor: pointer;
                    transform: scale(1.02);
                    box-shadow: 2px 2px 5px rgb(0,0,0,.53);
                }
               
            }
        }
    }

`;