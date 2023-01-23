import { memo, useCallback } from 'react'

import { Col, Row } from 'react-bootstrap'

import { Pagination } from './styles'

interface IPaginateProps {
  totalPages: number
  currentPage: number
  fetchCategory: (page: number) => Promise<void>
}

const PaginateComponent: React.FC<IPaginateProps> = ({
  totalPages,
  currentPage,
  fetchCategory,
}) => {
  const handlePageChange = useCallback(
    (page: number) => fetchCategory(page),
    [fetchCategory],
  )

  return (
    <Row>
      {totalPages > 1 && (
        <Col className="d-flex justify-content-center">
          <Pagination
            nextLabel=">"
            nextClassName={
              currentPage === Math.ceil(totalPages) ? 'd-none' : undefined
            }
            forcePage={currentPage - 1}
            onPageChange={(p) => handlePageChange(p.selected + 1)}
            pageCount={totalPages}
            previousLabel="<"
            previousClassName={currentPage === 1 ? 'd-none' : undefined}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
          />
        </Col>
      )}{' '}
    </Row>
  )
}

export default memo(PaginateComponent)
