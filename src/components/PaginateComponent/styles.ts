import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  font-weight: 700;

  li {
    list-style: none;
    color: white;

    a {
      display: inline-block;
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
      margin: 5px 5px;
      color: white;
      text-decoration: none;
      background-color: rgb(60, 62, 68);
      &:hover {
        color: rgb(255, 152, 0);
      }
    }

    &.selected a {
      background-color: rgb(158, 158, 158);
      color: rgb(39, 43, 51);
      border: none;
      &:hover {
        color: rgb(39, 43, 51);
      }
    }

    &:hover {
      color: rgb(255, 152, 0);
    }
  }
`
