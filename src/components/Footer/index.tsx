import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { FooterDiv, LinkStyled } from './style'

const Footer: React.FC = () => {
  return (
    <FooterDiv className="py-3">
      <Container>
        <Row>
          <Col>
            <section className="d-flex align-items-center justify-content-center">
              <p>Site feito por: &nbsp;</p>
              <LinkStyled
                href="https://www.linkedin.com/in/guimattos91/"
                target="_blank"
              >
                Guilherme Mattos
              </LinkStyled>
            </section>
          </Col>
        </Row>
      </Container>
    </FooterDiv>
  )
}

export default memo(Footer)
