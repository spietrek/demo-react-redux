import React from 'react';
import PlansTable from './PlansTable';

const HomePage = (isFetching, plans, searchTerm, searchHandler) => (
  <PlansTable
    isFetching={isFetching}
    plans={plans}
    searchTerm={searchTerm}
    onSearch={searchHandler}
  />
);

export default HomePage;
