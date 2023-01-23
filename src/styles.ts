import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body, html, #root {
  margin: 0;
  padding: 0;
  min-height: 100vh;

}


main{
  background-color: rgb(39, 43, 51);
  min-height:70vh;
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
