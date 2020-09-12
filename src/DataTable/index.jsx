import React, {useEffect, useState} from 'react';
import {Box, Paper, Table, TableContainer} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import DataTableHeader from "./Header";
import DataTableBody  from "./Body";
import Loading  from "./Loading";
import Paginator  from "./Paginator";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
  },
  container: {
    height: "600px",
  },
});

const DataTable = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);

  const getCharacters = () => {
    setIsLoading(true);
    const apiUrl = `https://rickandmortyapi.com/api/character/${!!page ? `?page=${page + 1}` : ''}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }

  const onChangePage = (nextPage) => {
    setPage(nextPage);
  };

  React.useEffect(() => {
    getCharacters()
  }, [page]);

  return (
    <Box mx={12} className={classes.root}>
      <Paper className={classes.wrapper}>
        {isLoading ? (<Loading />) : null}
        <TableContainer className={classes.container}>
          <Table stickyHeader>
            <DataTableHeader />
            <DataTableBody characters={!!data && !!data.results ? data.results : []}/>
          </Table>
        </TableContainer>
        <Paginator
          pages={!!data && !!data.info ? data.info.pages : 1}
          count={!!data && !!data.info ? data.info.count : 1}
          onChange={onChangePage}
          page={page}
        />
      </Paper>
    </Box>
  );
}

export default DataTable;
