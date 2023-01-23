import { memo } from 'react'

import { Card } from 'react-bootstrap'

import { ResultType } from 'types/EpisodeType'

import { CardDiv, ListStyle } from './style'

interface IEpisodeProps {
  episodeprop: ResultType
}

const EpisodesCard: React.FC<IEpisodeProps> = ({ episodeprop }) => {
  return (
    <CardDiv className="p-3">
      <Card.Header as="h2" className="pb-3 fs-4">
        {episodeprop.name}
      </Card.Header>
      <Card.Body className="d-flex align-items-end">
        <ListStyle>
          <li>
            <p>Air Date: &nbsp;</p>
            {episodeprop.air_date}
          </li>
          <li>
            <p>Episode: &nbsp;</p>
            {episodeprop.episode}
          </li>
        </ListStyle>
      </Card.Body>
    </CardDiv>
  )
}

export default memo(EpisodesCard)
