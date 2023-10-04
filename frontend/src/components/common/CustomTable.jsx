import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

export default function CustomTable(props) {
  const { columns, data, rowsPerPageOptions, Header } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
        sx={{ border: '1px solid  #EAECF0' }} 
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow >
              {Header.map((Header, index) => (
                <TableCell
                  sx={{ backgroundColor: "#F2FAFE", fontSize: "12px" , border: '1px solid  #EAECF0' ,textAlign:"center" }}
                  variant="typo12"
                  key={index}
                  // align="center"
                  align={Header.align}
                  colSpan={Header.colSpan}
                  rowSpan={Header.rowSpan}
                  style={{ top: 0, minWidth: Header.minWidth }}
                >
                  <Typography variant="typo12">{Header.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ backgroundColor: "#F2FAFE" , border: '1px solid  #EAECF0' }}
                  key={column.id}
                  align={column.align}
                  rowSpan={column.rowSpan}
                  style={{  minWidth: column.minWidth }}
                >
                  <Typography variant="typo12">{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column, colIndex) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={colIndex} align={column.align}>
                          <Typography variant="typo14light" color="text.secondary">
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                            </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
