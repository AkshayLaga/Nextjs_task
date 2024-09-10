import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  date: string, // New date parameter
) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '2024-09-01'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, '2024-09-02'),
  createData('Eclair', 262, 16.0, 24, 6.0, '2024-09-03'),
  createData('Cupcake', 305, 3.7, 67, 4.3, '2024-09-04'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, '2024-09-05'),
];

export default function BasicTable() {
  const handleAdd = (row: any) => {
    console.log('Add clicked', row);
  };

  const handleEdit = (row: any) => {
    console.log('Edit clicked', row);
  };

  const handleDelete = (row: any) => {
    console.log('Delete clicked', row);
  };

  return (
    <TableContainer component={Paper}>
         <Button onClick={() => handleAdd(rows)} color="secondary" variant='contained'>
            Add user
         </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Date</TableCell> {/* New Date Column */}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.date}</TableCell> {/* Display Date */}
              <TableCell align="center">
               
                <IconButton onClick={() => handleEdit(row)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
