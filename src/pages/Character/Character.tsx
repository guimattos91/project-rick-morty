import { memo, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { BsFillCircleFill, BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

import { useCharacters } from 'context/CharactersContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'

import useTitle from 'hooks/useTitle'

import { BreadcrumberStyled } from 'styles'

import {
  DivImageStyled,
  DivInformationStyled,
  DivStyled,
  LinkStyled,
  StyledTitle,
  StyledTitleH2,
  TextCategory,
  TextInformation,
} from './style'

const Character: React.FC = () => {
  const { character, isLoading, fetchCharacter } = useCharacters()
  const { id } = useParams()

  const setTitle = useTitle()
  useEffect(() => setTitle(`${character?.name} | Characters`))

  useEffect(() => {
    if (id) fetchCharacter(id)
  }, [fetchCharacter, id])

  return (
    <>
      <Header />
      <main>
        <Container>
          {isLoading && <LoadingComponent />}

          {!isLoading && (
            <Row className="pt-4">
              {character && (
                <>
                  <Col xs={12} md={6}>
                    <DivImageStyled>
                      <img
                        src={character.image}
                        alt={character.name}
                        className="img-fluid"
                      />
                    </DivImageStyled>
                  </Col>
                  <Col xs={12} md={6}>
                    <DivStyled>
                      {character.name && (
                        <StyledTitle>{character.name}</StyledTitle>
                      )}
                      <nav aria-label="breadcrumb" className="pb-4">
                        <BreadcrumberStyled className="breadcrumb">
                          <li className="breadcrumb-item" aria-current="page">
                            <LinkStyled to="/">Home</LinkStyled>
                          </li>
                          <li className="breadcrumb-item" aria-current="page">
                            <LinkStyled to="/characters">Characters</LinkStyled>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {character.name}
                          </li>
                        </BreadcrumberStyled>
                      </nav>
                      {character.species && (
                        <DivInformationStyled>
                          <TextCategory className="fs-4">Species:</TextCategory>
                          <TextInformation className="fs-4">
                            &nbsp; {character.species}
                          </TextInformation>
                        </DivInformationStyled>
                      )}

                      {/* Status Character */}
                      {character.status === 'Dead' && (
                        <DivInformationStyled>
                          <TextCategory className="fs-4">Status:</TextCategory>
                          <BsFillCircleFill
                            color="Red"
                            size={10}
                            className="ms-3"
                          />
                          <TextInformation className="fs-4">
                            &nbsp;{character.status}
                          </TextInformation>
                        </DivInformationStyled>
                      )}
                      {character.status === 'Alive' && (
                        <DivInformationStyled>
                          <TextCategory className="fs-4">Status:</TextCategory>
                          <BsFillCircleFill
                            color="Green"
                            size={10}
                            className="ms-3"
                          />
                          <TextInformation className="fs-4">
                            &nbsp;{character.status}
                          </TextInformation>
                        </DivInformationStyled>
                      )}
                      {character.status === 'Unknown' && (
                        <DivInformationStyled>
                          <TextCategory className="fs-4">Status:</TextCategory>
                          <BsFillCircleFill
                            color="Gray"
                            size={10}
                            className="ms-3"
                          />
                          <TextInformation className="fs-4">
                            &nbsp;{character.status}
                          </TextInformation>
                        </DivInformationStyled>
                      )}

                      {/* Gender Character */}
                      {character.gender === 'Male' && (
                        <DivInformationStyled>
                          <TextCategory className="fs-4">Gender:</TextCategory>
                          <BsGenderMale
                            color="Gray"
                            size={18}
                            className="ms-3"
                          />
                          <TextInformation className="fs-4">
                            &nbsp;{character.gender}
                          </TextInformation>
                        </DivInformationStyled>
                      )}
                      {character.gender === 'Female' && (
                        <DivInformationStyled>
                          <TextCategory className="fs-4">Gender:</TextCategory>
                          <BsGenderFemale
                            color="Gray"
                            size={18}
                            className="ms-3"
                          />
                          <TextInformation className="fs-4">
                            &nbsp;{character.gender}
                          </TextInformation>
                        </DivInformationStyled>
                      )}

                      {/* Origin Character */}
                      {character.origin && (
                        <DivInformationStyled>
                          <div>
                            <TextCategory className="fs-4">
                              Origin Location:
                            </TextCategory>
                            <TextInformation className="fs-4">
                              {character.origin.name}
                            </TextInformation>
                          </div>
                        </DivInformationStyled>
                      )}
                    </DivStyled>
                  </Col>
                  <Col xs={12}>
                    <DivStyled className="pt-5 pb-4">
                      <StyledTitleH2>Check the next season:</StyledTitleH2>
                      <div className="d-flex justify-content-center">
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/KQ9Cgdsa9tc"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </DivStyled>
                  </Col>
                </>
              )}
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Character)
