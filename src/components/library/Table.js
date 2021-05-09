import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Form } from 'semantic-ui-react';
import styled from 'styled-components';

import dataFormatter from '../../utils/data-formatter';
import { isNullish } from '../../utils';

import Pagination, { itemsCountPerPageOptions } from './Pagination';
import Loader from './Loader';
import Text from './Text';

const dataTypes = Object.freeze({
  DATE: 'date'
});

function UnStyledTable({ className, columns, dataSource, requesting, noDataMessage, onSearch }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [currentItemsCountPerPage, setCurrentItemsCountPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  function updateCurentItems(page = 1, itemsCountPerPage = itemsCountPerPageOptions[0]) {
    const startIndex = (page - 1) * itemsCountPerPage;
    const endIndex = startIndex + itemsCountPerPage;
    setCurrentItems(dataSource.slice(startIndex, endIndex));
    setCurrentPage(page);
    setCurrentItemsCountPerPage(itemsCountPerPage);
  }

  function updatePageCount(itemsCountPerPage = itemsCountPerPageOptions[0]) {
    const pagesCountDecimalValue = dataSource.length / itemsCountPerPage;
    const pagesCountRoundedValue = dataSource.length % itemsCountPerPage === 0 ? pagesCountDecimalValue : Math.ceil(pagesCountDecimalValue);
    setPagesCount(pagesCountRoundedValue);
  }

  function handlePageChange(page) {
    updateCurentItems(page);
  }

  function handleItemsCountPerPageChange(itemsCountPerPage) {
    updateCurentItems(1, itemsCountPerPage);
    updatePageCount(itemsCountPerPage);
  }

  function handleSearch(evt) {
    if (onSearch) onSearch(evt);
  }

  useEffect(() => {
    updateCurentItems();
    updatePageCount();
  }, [dataSource]);

  return (
    <div className={className}>
      <header>
        <Form.Input type='text' placeholder='Search' onChange={handleSearch} />
      </header>
      <main>
        {requesting ? (
          <Loader />
        ) : (
          <Table celled size='large'>
            <Table.Header>
              <Table.Row>
                {columns.map(({ key, title }) => (
                  <Table.HeaderCell key={key}>
                    <Text weight={600}>{title}</Text>
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>

            {dataSource.length > 0 ? (
              <>
                <Table.Body>
                  {currentItems.map((item, itemIndex) => (
                    <Table.Row key={itemIndex}>
                      {columns.map((column, columnIndex) => (
                        <Table.Cell key={getCellKey(column, columnIndex)}>{displayCellContent(column, item)}</Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan={columns.length}>
                      <Pagination
                        currentPage={currentPage}
                        currentItemsCountPerPage={currentItemsCountPerPage}
                        pagesCount={pagesCount}
                        onPageChange={handlePageChange}
                        onItemsCountPerPageChange={handleItemsCountPerPageChange}
                      />
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </>
            ) : (
              <Table.Body>
                <Table.Row>
                  <Table.Cell colSpan={columns.length}>
                    <Text fluid color='gray' align='center'>
                      {noDataMessage}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            )}
          </Table>
        )}
      </main>
    </div>
  );
}

function getCellKey(column, columnIndex) {
  return [column.key, columnIndex].join('-');
}

function displayCellContent(column, item) {
  if (isNullish(column.dataIndex) && isNullish(column.render)) throw new Error('You must provide either <dataIndex> or <render> for each column');
  if (Object.keys(item).includes(column.dataIndex)) {
    return column.render ? column.render(item) : formatCellValue(column, item);
  }

  return column.render(item);
}

function formatCellValue(column, item) {
  const { dataIndex, dataType } = column;
  const value = item[dataIndex];
  if (!column.dataType || !Object.values(dataTypes).includes(dataType)) return <Text>{value}</Text>;

  const formattingStrategies = {
    [dataTypes.DATE]: dataFormatter.formatDate
  };

  return <Text>{formattingStrategies[dataType](value)}</Text>;
}

const StyledTable = styled(UnStyledTable)`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  > header {
    display: flex;
    margin-bottom: 2rem;
  }
`;

export default function AppTable({ dataSource = [], requesting = false, ...restProps }) {
  return <StyledTable dataSource={dataSource} requesting={requesting} {...restProps} />;
}
AppTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string,
      dataType: PropTypes.oneOf(Object.values(dataTypes)),
      render: PropTypes.func
    })
  ).isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onActionClick: PropTypes.func
    })
  ),
  requesting: PropTypes.bool,
  noDataMessage: PropTypes.string,
  onSearch: PropTypes.func
};
