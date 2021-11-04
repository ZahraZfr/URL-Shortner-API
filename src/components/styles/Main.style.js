import styled from "styled-components";

export const MainHolder = styled.div`
    text-align: center;
    color: palevioletred;
    display:flex;
    justify-content:space-between;
    align-items:center;
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
                transition:all 0.3s;

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
                transition:all 0.3s;

                &:hover{
                    cursor: pointer;
                    transform: scale(1.02);
                    box-shadow: 2px 2px 5px rgb(0,0,0,.53);
                }
               
            }
        }
    }


    @media only screen and (max-width: 1200px) {
        flex-direction:column;
        form{
            order:2;
            width:80%;
            justify-content:space-between;
            padding:0;

            h1{
                font-size:45px;
            }
            div{
                flex-direction:column;
                justify-content:center;
                align-items:center;

                input{
                    width:90% !important;
                    margin:0 auto 15px !important;
                    padding: 20px 8px !important;
                }
    
                button{
                    width:90% !important;
                    padding:4px ;
                }
            }
            section{
                flex-direction:column;
                height:auto;
                margin-bottom:100px;
                button{
                    width:30%
                }
            }
        }
        img {
            max-width: 80% !important;
            margin-top:-50px
        }
      }




      @media only screen and (max-width: 668px) {
          img{
              margin-top:-50px;
          }
          form{
              width:90%;
              h1{
                  font-size:35px
              }
              section{
                margin:50px auto 100px;
                width:90%;
                button{
                    width:50%
                }
            }
          }
      }
`;