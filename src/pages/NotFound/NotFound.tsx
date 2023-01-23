import { memo, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Erro404 from 'assets/404rick.png'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const NotFound: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => setTitle('404'))

  return (
    <>
      <Header />
      <main>
        <Container>
          <Row className="pt-4">
            <Col>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-white pt-3 text-center">
                  This dimension does not exist.
                </h2>
                <h1>
                  <Link to="/">
                    <img
                      src={Erro404}
                      alt="404"
                      className="d-flex justify-content-center text-center img-fluid"
                    />
                  </Link>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default memo(NotFound)
