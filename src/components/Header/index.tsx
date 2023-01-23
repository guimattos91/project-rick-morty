import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import Logo from 'assets/Logo.png'

import {
  H1Styled,
  HeaderDiv,
  ImgStyled,
  LinkStyled,
  SectionStyled,
} from './style'

const Header: React.FC = () => {
  return (
    <HeaderDiv>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col xs={12} md={6}>
            <H1Styled>
              <LinkStyled to="/">
                <ImgStyled src={Logo} alt="logo" className="img-fluid" />
              </LinkStyled>
            </H1Styled>
          </Col>
          <Col xs={12} md={6}>
            <SectionStyled>
              <nav className="d-flex align-items-center">
                <LinkStyled to="/characters" className="px-3">
                  Characters
                </LinkStyled>
                <LinkStyled to="/episodes" className=" px-3 ">
                  Episodes
                </LinkStyled>
                <LinkStyled to="/locations" className=" px-3 ">
                  Locations
                </LinkStyled>
              </nav>
            </SectionStyled>
          </Col>
        </Row>
      </Container>
    </HeaderDiv>
  )
}

export default memo(Header)
