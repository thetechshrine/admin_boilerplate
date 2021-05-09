import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Form } from 'semantic-ui-react';
import styled from 'styled-components';

export const itemsCountPerPageOptions = [5, 10, 20];

function UnStyledPagination({ className, currentPage, pagesCount, visiblePagesCount = 5, onPageChange, onItemsCountPerPageChange }) {
  const [visiblePages, setVisiblePages] = useState([]);
  const [firstVisiblePageIndex, setFirstVisiblePageIndex] = useState(0);
  const [lastVisiblePageIndex, setLastVisiblePageIndex] = useState(visiblePagesCount);

  useEffect(() => {
    setVisiblePages(initVisiblePages(pagesCount));
  }, [pagesCount]);

  function handlePrevPage() {
    if (currentPage > 1) {
      const targetPageIndex = getPageIndex(currentPage - 1);
      if (firstVisiblePageIndex > targetPageIndex) {
        setFirstVisiblePageIndex(targetPageIndex);
        setLastVisiblePageIndex(targetPageIndex + visiblePagesCount);
      }
      onPageChange(getPage(targetPageIndex));
    }
  }

  function handleNextPage() {
    if (currentPage < pagesCount) {
      const targetPageIndex = getPageIndex(currentPage + 1);
      if (targetPageIndex === lastVisiblePageIndex) {
        const newLastVisiblePageIndex = targetPageIndex + 1;
        setLastVisiblePageIndex(newLastVisiblePageIndex);
        setFirstVisiblePageIndex(newLastVisiblePageIndex - visiblePagesCount);
      }
      onPageChange(getPage(targetPageIndex));
    }
  }

  function handleItemsCountPerPageChange(evt, { value }) {
    onItemsCountPerPageChange(value);
  }

  return (
    <div className={className}>
      <section>
        <Form.Select fluid defaultValue={itemsCountPerPageOptions[0]} options={getPageOptions()} onChange={handleItemsCountPerPageChange} />
      </section>
      <section>
        <Menu pagination>
          <Menu.Item as='a' icon disabled={currentPage === 1} onClick={handlePrevPage}>
            <Icon name='chevron left' />
          </Menu.Item>
          {visiblePages.slice(firstVisiblePageIndex, lastVisiblePageIndex).map((page, index) => (
            <Menu.Item key={index} as='a' disabled={page === currentPage} onClick={() => onPageChange(page)}>
              {page}
            </Menu.Item>
          ))}
          <Menu.Item as='a' icon disabled={pagesCount === 0 || currentPage === pagesCount} onClick={handleNextPage}>
            <Icon name='chevron right' />
          </Menu.Item>
        </Menu>
      </section>
    </div>
  );
}

function initVisiblePages(pagesCount = 0) {
  return Array(pagesCount)
    .fill()
    .map((value, index) => index + 1);
}

function getPageIndex(page) {
  return page - 1;
}

function getPage(pageIndex) {
  return pageIndex + 1;
}

function getPageOptions() {
  return itemsCountPerPageOptions.map((value) => ({ key: value, text: `${value}`, value }));
}

const StyledPagination = styled(UnStyledPagination)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Pagination(props) {
  return <StyledPagination {...props} />;
}
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  visiblePagesCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  onItemsCountPerPageChange: PropTypes.func.isRequired
};
