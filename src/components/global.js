
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

  *,
  *::after,
  *::before  {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    transition: all 0.25s linear;

    .themeBTN{
      position:fixed;
      top:20px;
      right:20px;
      padding: 5px 15px;
      border-radius:10px;
      border:none;
      box-shadow: 1px 1.5px 2px 0.5px #d4d4d4;
      background-color:#fafafa;
    }
    .themeBTN:hover{
      border-bottom:3.2px solid rgb(254,200,2);
  }
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }
    
;

  }
  @media only screen and (min-width: 668px) {
    svg{
        display:none;
    }
    @media only screen and (max-width: 668px){
      svg{

      }
    }
}

`

