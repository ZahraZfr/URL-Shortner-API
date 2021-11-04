import styled from "styled-components";


export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export const Wrapper = styled.section`
    background:${({ theme }) => theme.body};
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
       box-shadow: 1px 1.5px 2px 0.5px #d4d4d4;
       padding-bottom:4px;
       text-align:center;
       padding:5px 12px;
       border-radius:10px;
       background-color:#fafafa;
       border:none;
       outline:none;
        
        &:hover{
            padding:5.5px 12.5px;
            margin:9.5px 14.5px;
            border-bottom:3.2px solid rgb(254,200,2);
        }

        img{
            width:17px;
            margin:5px 5px 0 0;
            height:auto;
            color:rgb(44,68,78);
        }
    }



    // @media only screen and (max-width: 1200px) {
    //    a{
    //     padding:2.5px 9.5px;
    //     margin:6.5px 11.5px;
    //    }

    //    img{
    //     width:12px;
    //     margin:2px px 0 0;
    //    }
    //   }

      @media only screen and (max-width: 668px) {
        a{
        display:none;

        img{
            width:12px;
            margin:1px px 0 0;
           }
        }
        
       }

`;