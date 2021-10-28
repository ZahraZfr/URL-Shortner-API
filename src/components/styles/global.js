import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  body {
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.15em;
    display : flex;
    align-item:center;
    justify-content:center;
    height:100vh;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  
`

export default GlobalStyles
