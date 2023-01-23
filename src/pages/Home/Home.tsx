import { memo, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import CharactersBanner from 'assets/charactersimage.png'
import EpisodesBanner from 'assets/episodesimage.png'
import LocationBanner from 'assets/locationimage.png'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

import { ImageStiled } from './style'

const Home: React.FC = () => {
  const setTitle = useTitle()
  useEffect(() => setTitle(''))

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="row-cols-1 pt-5">
            <Col>
              <Link to="/characters">
                <ImageStiled
                  src={CharactersBanner}
                  alt="Characters"
                  className="img-fluid"
                />
              </Link>
            </Col>
            <Col>
              <Link to="/locations">
                <ImageStiled
                  src={LocationBanner}
                  alt="Location"
                  className="img-fluid"
                />
              </Link>
            </Col>
            <Col>
              <Link to="/episodes">
                <ImageStiled
                  src={EpisodesBanner}
                  alt="Episodes"
                  className="img-fluid"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(Home)
