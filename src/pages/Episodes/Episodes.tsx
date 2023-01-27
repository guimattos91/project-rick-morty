import { memo, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { useEpisodes } from 'context/EpisodesContext'

import EpisodesCard from 'components/EpisodesCard'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import PaginateComponent from 'components/PaginateComponent'

import useTitle from 'hooks/useTitle'

import { LinkStyled } from 'pages/Character/style'

import { BreadcrumberStyledMainPage } from 'styles'

const Episodes: React.FC = () => {
  const { episodes, isLoading, currentPage, totalPages, fetchEpisodes } =
    useEpisodes()

  const setTitle = useTitle()
  useEffect(() => setTitle('Episodes'))

  useEffect(() => {
    fetchEpisodes(1)
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
                    Episodes
                  </li>
                </BreadcrumberStyledMainPage>
              </nav>
              <h1 className="text-white">Episodes</h1>
            </Col>
          </Row>
          {isLoading && <LoadingComponent />}

          {!isLoading && (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
              {episodes &&
                episodes.map((oneepisode) => (
                  <Col key={oneepisode.id} className="mb-4">
                    <EpisodesCard episodeprop={oneepisode} />
                  </Col>
                ))}
            </Row>
          )}
          {!isLoading && episodes && (
            <PaginateComponent
              totalPages={totalPages}
              currentPage={currentPage}
              fetchCategory={fetchEpisodes}
            />
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Episodes)
