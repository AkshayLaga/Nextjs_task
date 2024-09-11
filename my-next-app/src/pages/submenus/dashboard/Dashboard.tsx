import React, { useState, useEffect } from 'react';
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
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import UserService from '@/services/userService';
import CreateUser from '@/components/Dialog/Dialog';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/Store';

type Users = {
  _id: string;
  name: string;
  role: string;
  age: number;
  date: Date;
};

export default function BasicTable() {
  const [users, setUsers] = useState<Users[]>([]);
  const [open, setOpen] = useState(false); // State to manage dialog visibility
  const [editUser, setEditUser] = useState<Users | null>(null); // State to manage editing user
  const userTodo = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const userResponse = await UserService.fetchUsers();
      if (userResponse && Array.isArray(userResponse)) {
        setUsers(userResponse);
      } else {
        setUsers([]);
        console.error("Unexpected response format:", userResponse);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  const handleAddClick = () => {
    setEditUser(null);
    setOpen(true); // Open dialog for adding a new user
  };

  const handleEditClick = (user: Users) => {
    setEditUser(user);
    setOpen(true); // Open dialog for editing an existing user
  };

  const handleCloseDialog = () => {
    setOpen(false); // Close dialog
    setEditUser(null); // Reset edit user
  };

  const handleDelete = async (id: string) => {
    try {
      await UserService.deleteUsers(id);
      loadUsers(); // Refresh the users list after deleting
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Button onClick={handleAddClick} color="secondary" variant='contained'>
          Add user
        </Button>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Designation</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleEditClick(row)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(row._id)} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for adding/editing a user */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{editUser ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <CreateUser
            onClose={handleCloseDialog}
            refreshUsers={loadUsers}
            user={editUser}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
