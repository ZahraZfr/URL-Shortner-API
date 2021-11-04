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
    min-width:330px
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  @media only screen and (min-width: 668px) {
    svg{
        display:none;
    }

}

// *******************

span {
  font-size: 30px;
  
}
.moon{
  margin-left:-10px
}
.dark-mode {
  background-color: #1a1919;
  color: #999;
  transition: background-color 0.25s ease-in-out;
}

.light-mode {
  background-color: #fff;
  color: #333;
  transition: background-color 0.25s ease-in-out;
  z-index:-100
}

.container {
  margin-top:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:50px;
  right:50px;
  width: 47px;
  height: 25px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 14px;
}


.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #19a2c1;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


`

export default GlobalStyles
