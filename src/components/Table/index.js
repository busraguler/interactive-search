import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const CustomTable = ({ children, tableSearchBar }) => {
  return (
    <TableContainer component={Paper} className="tableContainer">
      {tableSearchBar && tableSearchBar}
      <Table sx={{ tableLayout: "fixed" }}>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
