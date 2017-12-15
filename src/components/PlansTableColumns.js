import { PercentageCompleteCell, LinksCell } from './PlansTableCells';

const PlansTableColumns = [
  {
    columns: [
      {
        Header: 'Plan Number',
        accessor: 'planNumber',
        maxWidth: 100,
      },
      {
        Header: 'Plan Name',
        accessor: 'planName',
      },
      {
        Header: 'Priority',
        accessor: 'planPriority',
        maxWidth: 80,
        style: {
          textAlign: 'center',
        },
      },
      {
        Header: '% Complete',
        accessor: 'percentageComplete',
        maxWidth: 100,
        Cell: PercentageCompleteCell,
      },
      {
        Header: 'Modified',
        accessor: 'modifiedDate',
        maxWidth: 135,
      },
      {
        maxWidth: 180,
        Cell: LinksCell,
      },
    ],
  },
];

export default PlansTableColumns;
