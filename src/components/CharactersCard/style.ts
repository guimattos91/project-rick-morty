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

export const StyledTitle = styled.h2`
  font-style: normal;
  color: #2d677f;
  font-weight: 700;
  font-size: large;
`

export const ListStyle = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  li {
    margin: 0;
    color: rgb(158, 158, 158);
    border-style: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    p {
      margin: 0;
      padding: 0;
      font-weight: 700;
      color: white;
    }
  }
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-style: normal;
  color: white;
  font-weight: 700;

  &:hover {
    color: rgb(255, 152, 0);
  }
`
