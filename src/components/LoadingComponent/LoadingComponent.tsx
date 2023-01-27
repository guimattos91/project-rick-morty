import { memo } from 'react'

import { Col, Row, Spinner } from 'react-bootstrap'

const LoadingComponent: React.FC = () => {
  return (
    <Row>
      <Col xs={12} className="d-flex justify-content-center">
        <div className="text-center">
          <Spinner animation="border" variant="success" />
        </div>
      </Col>
    </Row>
  )
}

export default memo(LoadingComponent)
