import { memo, useEffect } from 'react'

import { Container, Row, Col, Spinner } from 'react-bootstrap'

import { useCharacters } from 'context/CharactersContext'

import CharactersCard from 'components/CharactersCard'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PaginateComponent from 'components/PaginateComponent'

import useTitle from 'hooks/useTitle'

import { LinkStyled } from 'pages/Character/style'

import { BreadcrumberStyledMainPage } from 'styles'

const Characters: React.FC = () => {
  const { characters, isLoading, currentPage, totalPages, fetchCharacters } =
    useCharacters()

  const setTitle = useTitle()
  useEffect(() => setTitle(''))

  useEffect(() => {
    fetchCharacters(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
            <Col>
              <nav aria-label="breadcrumb">
                <BreadcrumberStyledMainPage className="breadcrumb">
                  <li className="breadcrumb-item" aria-current="page">
                    <LinkStyled to="/">Home</LinkStyled>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Characters
                  </li>
                </BreadcrumberStyledMainPage>
              </nav>
              <h1 className="text-white">Characters</h1>
            </Col>
          </Row>
          <Row className="row-cols-1  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
            {isLoading && (
              <div className="text-center">
                <Spinner animation="border" variant="success" />
              </div>
            )}
            {!isLoading &&
              characters.map((character) => (
                <Col key={character.id} className="mb-4">
                  <CharactersCard character={character} />
                </Col>
              ))}
          </Row>
          <PaginateComponent
            totalPages={totalPages}
            currentPage={currentPage}
            fetchCategory={fetchCharacters}
          />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Characters)
