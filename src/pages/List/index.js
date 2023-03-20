import React, { useState, useMemo } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Table from "../../components/Table";
import SearchBar from "../../components/SearchBar";
import ListItem from "./ListItem";
import { listData as data } from "./constans";

const List = () => {
  const [currentFilter, setCurrentFilter] = useState("");
  const listData = useMemo(
    () =>
      data.filter((item) => {
        return Object.values(item)
          .join("")
          .toUpperCase()
          .includes(currentFilter.toUpperCase());
      }),

    [currentFilter]
  );

  return (
    <Table
      tableSearchBar={
        <SearchBar
          label={"SEARCH (Client Name / Policy Number)"}
          onChange={(filter) => setCurrentFilter(filter)}
        />
      }
    >
      {listData &&
        listData.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>
              <ListItem name={row.name} phone={row.phone} mail={row.mail} />
            </TableCell>
            <TableCell>
              <ListItem policy={row.policy} />
            </TableCell>
          </TableRow>
        ))}
    </Table>
  );
};

export default List;
