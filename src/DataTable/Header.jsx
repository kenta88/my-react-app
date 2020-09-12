import React from 'react';
import {Checkbox, TableCell, TableHead, TableRow} from "@material-ui/core";

function DataTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={false}
            onChange={() => {
            }}
          />
        </TableCell>
        <TableCell size="small" style={{maxWidth: "200px"}}>
          Photo
        </TableCell>
        <TableCell>
          Name
        </TableCell>
        <TableCell>
          Species
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default DataTableHeader;
