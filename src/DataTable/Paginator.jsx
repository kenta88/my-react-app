import React from 'react';
import { TablePagination } from "@material-ui/core";

function Paginator({pages, count, onChange, page}) {
  const onChangePage = (event, nextPage) => {
    onChange(nextPage)
  };
  return (
    <TablePagination
      rowsPerPageOptions={[]}
      component="div"
      count={count}
      rowsPerPage={20}
      page={page}
      onChangePage={onChangePage}
    />
  );
}

export default Paginator;
