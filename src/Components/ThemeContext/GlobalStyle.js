import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  padding: 0;margin: 0;box-sizing:border-box;
}

html{
  font-family: 'Poppins', sans-serif;
}
.container{
  position:relative;
  margin-left:auto;
  margin-right:auto;
  padding-right:15px;
  padding-left:15px
}
@media (min-width: 476px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 768px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 992px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 1200px){
  .container{
    padding-right:15px;
    padding-left:15px
  }
}
@media (min-width: 476px){
  .container{
    width:100%
  }
}
@media (min-width: 768px){
  .container{
    width:720px;
    max-width:100%
  }
}
@media (min-width: 992px){
  .container{
    width:960px;
    max-width:100%
  }
}
@media (min-width: 1200px){
  .container{
    width:1140px;
    max-width:100%
  }
}
@media (min-width: 1400px){
  .container{
    width:1340px;
    max-width:100%
  }
}

img{
  max-width: 100%;
}
`;
