import React from 'react';
import {Checkbox, TableBody, TableCell, TableRow} from "@material-ui/core";

function DataTableBody({ characters }) {
  console.log(characters[0]);
  return (
    <TableBody style={{minHeight: "600px"}}>
      {characters.map((character) => (
        <TableRow key={character.id}>
          <TableCell padding="checkbox">
            <Checkbox
              checked={false}
              onChange={() => {
              }}
            />
          </TableCell>
          <TableCell padding="checkbox">
            <img src={character.image} width="120px"/>
          </TableCell>
          <TableCell>{character.name}</TableCell>
          <TableCell>{character.species}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default DataTableBody;
