import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.15em;
    margin: 0;
    display : flex;
    align-item:center;
    justify-content:center;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  
`

export default GlobalStyles
