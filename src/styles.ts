import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body, html, #root {
  margin: 0;
  padding: 0;
  display:flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgb(39, 43, 51);
  width: 100%;
}


main{
  background-color: rgb(39, 43, 51);
  min-height: 100%;
}

footer{
  margin-top:auto;
}

p{
  margin: 0;
  color:white;
}
`
export const BreadcrumberStyled = styled.ol`
  li {
    color: white;
  }
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`
export const BreadcrumberStyledMainPage = styled.ol`
  li {
    color: white;
  }
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`
