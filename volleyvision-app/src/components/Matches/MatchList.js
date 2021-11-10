import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'match', label: 'Match #', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 50 },
  {
    id: 'opp',
    label: 'Opponent',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tournament',
    label: 'Tournament',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'result',
    label: 'Result',
    minWidth: 130,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(match, date, opp, tournament, location, result) {
  return { match, date, opp, tournament, location, result};
}

{/*Match number, date, opponent, tournament, location, result
JVA Midwest Beach championship, bvca national champsionship, club challenge series*/}

const rows = [
  createData(<Link to="/match_summary">Match 1</Link>, '4/2/21', 'Harvard', 'JVA Midwest Beach Championship', 'Arizona', 'WIN'),
  createData(<Link to="/match_summary">Match 2</Link>, '5/2/21', 'Yale', 'BVCA National Beach Championship', 'Boston', 'WIN'),
  createData(<Link to="/match_summary">Match 3</Link>, '6/2/21', 'Princeton', 'Club Challenge Series', 'Nashville', 'WIN'),
  createData(<Link to="/match_summary">Match 4</Link>, '7/2/21', 'MIT', 'Olympics', 'Tokyo', 'WIN'),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Vanderbilt
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}