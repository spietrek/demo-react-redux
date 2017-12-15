import React from 'react';
import ReactTable from 'react-table';
import styled from 'styled-components';
import 'react-table/react-table.css';
import Spinner from './common/Spinner';
import SearchInput from './common/SearchInput';
import PlansTableColumns from './PlansTableColumns';
import PlansTableDetails from './PlansTableDetails';

const ExtendedReactTable = styled(ReactTable)`
  font-size: 12px;
`;

const TableResult = (plans, searchTerm, onSearch) => (
  <React.Fragment>
    <SearchInput value={searchTerm} onChange={onSearch} />
    <ExtendedReactTable
      data={plans}
      noDataText="No plans available"
      columns={PlansTableColumns}
      defaultSorted={[
        {
          id: 'planNumber',
          desc: false,
        },
      ]}
      defaultPageSize={10}
      className="-striped -highlight react-table-container"
      SubComponent={PlansTableDetails}
    />
  </React.Fragment>
);

/* eslint-disable react/prop-types */
const withSpinnerOrTable = ({ plans, isFetching, searchTerm, onSearch }) =>
  isFetching ? Spinner() : TableResult(plans, searchTerm, onSearch);
/* eslint-enable react/prop-types */

const PlansTable = props => {
  const displayResult = withSpinnerOrTable({ ...props });
  return <React.Fragment>{displayResult}</React.Fragment>;
};

export default PlansTable;
