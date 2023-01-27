import { memo, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { useLocal } from 'context/LocationContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingComponent from 'components/LoadingComponent'
import LocationCard from 'components/LocationCard'
import PaginateComponent from 'components/PaginateComponent'

import useTitle from 'hooks/useTitle'

import { LinkStyled } from 'pages/Character/style'

import { BreadcrumberStyledMainPage } from 'styles'

const Location: React.FC = () => {
  const { locations, isLoading, currentPage, totalPages, fetchLocations } =
    useLocal()

  const setTitle = useTitle()
  useEffect(() => setTitle('Locations'))

  useEffect(() => {
    fetchLocations(1)
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
                    Locations
                  </li>
                </BreadcrumberStyledMainPage>
              </nav>
              <h1 className="text-white">Locations</h1>
            </Col>
          </Row>
          {isLoading && <LoadingComponent />}
          {!isLoading && (
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 pt-4">
              {locations &&
                locations.map((location) => (
                  <Col key={location.id} className="mb-4">
                    <LocationCard location={location} />
                  </Col>
                ))}
            </Row>
          )}
          {!isLoading && locations && (
            <PaginateComponent
              totalPages={totalPages}
              currentPage={currentPage}
              fetchCategory={fetchLocations}
            />
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Location)
