import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardDiv = styled.div`
  background-color: rgb(60, 62, 68);
  border-radius: 0.25rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 5px;
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyledTitle = styled.h1`
  font-style: normal;
  color: white;
  font-weight: 700;
`
export const StyledTitleH2 = styled.h2`
  font-style: normal;
  color: white;
  text-align: center;
  font-weight: 700;
`
export const TextCategory = styled.p`
  font-style: normal;
  color: white;
  font-weight: 700;
`
export const TextInformation = styled.p`
  font-style: normal;
  color: rgb(158, 158, 158);
`
export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-bottom: 3rem;
    padding-top: 2rem;
    text-align: center;
    justify-content: center;
  }
`
export const DivInformationStyled = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`
export const DivImageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;
  color: inherit;

  &:hover {
    color: inherit;
  }
`
