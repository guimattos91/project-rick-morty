import { memo } from 'react'

import { Ratio } from 'react-bootstrap'

import { strToSlug } from 'helpers'

import { CharactersType } from 'types/CharacterType'

import { CardDiv, LinkStyled, ListStyle, StyledTitle } from './style'

interface ICharactersProps {
  character: CharactersType
}

const CharacterCard: React.FC<ICharactersProps> = ({ character }) => {
  return (
    <CardDiv>
      <LinkStyled
        to={`/character/${character.id}/${strToSlug(character.name)}`}
      >
        <Ratio
          aspectRatio="1x1"
          style={{
            backgroundImage: `url(${character.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        >
          <div />
        </Ratio>
      </LinkStyled>
      <div className="p-3">
        <div className="d-flex">
          <StyledTitle className="pb-2">
            <LinkStyled
              to={`/character/${character.id}/${strToSlug(character.name)}`}
            >
              {character.name}
            </LinkStyled>
          </StyledTitle>
        </div>
        <ListStyle className="d-flex">
          <li>
            <p>Species: &nbsp;</p>
            {character.species}
          </li>
          <li>
            <p>Gender: &nbsp;</p>
            {character.gender}
          </li>
          <li>
            <p>Status: &nbsp;</p>
            {character.status}
          </li>
        </ListStyle>
      </div>
    </CardDiv>
  )
}

export default memo(CharacterCard)
