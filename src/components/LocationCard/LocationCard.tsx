import { memo } from 'react'

import { Card } from 'react-bootstrap'

import { LocalType } from 'types/LocalType'

import { CardDiv, ListStyle } from './style'

interface ILocationProps {
  location: LocalType
}

const LocationCard: React.FC<ILocationProps> = ({ location }) => {
  return (
    <CardDiv className="p-3">
      <Card.Header as="h3" className="pb-3 fs-4">
        {location.name}
      </Card.Header>
      <Card.Body className="d-flex align-items-end">
        <ListStyle>
          <li>
            <p>Type: &nbsp;</p>
            {location.type}
          </li>
          <li>
            <p>Dimension: &nbsp;</p>
            {location.dimension}
          </li>
        </ListStyle>
      </Card.Body>
    </CardDiv>
  )
}

export default memo(LocationCard)
