import React, { useState, useEffect } from 'react';
import UserService from '@/services/userService';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type CreateUserProps = {
  onClose: () => void; // Function to close the dialog
  refreshUsers: () => void; // Function to refresh the users list
  user: Users | null; // Optional user for editing
};

type Users = {
  _id?: string;
  name?: string;
  role?: string;
  age?: number;
  date?: Date;
};

export default function CreateUser({ onClose, refreshUsers, user }: CreateUserProps) {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [age, setAge] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (user) {
      // Pre-fill the form if editing an existing user
      setName(user.name || '');
      setRole(user.role || '');
      setAge(user.age);
    }
  }, [user]);

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (user?._id) {
        // Update existing user
        await UserService.updateUsers(user._id, { name, role, age });
      } else {
        // Add new user
        await UserService.addUsers({ name, role, age });
      }
      refreshUsers(); // Refresh the users list after adding/updating
      onClose(); // Close the dialog
    } catch (err) {
      console.log("Error saving user", err);
    }
  };

  return (
    <form onSubmit={Submit}>
      <div className='mb-2'>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          placeholder='Enter Name'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor=''>Role</label>
        <input
          type='text'
          placeholder='Enter Role'
          className='form-control'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor=''>Age</label>
        <input
          type='number'
          placeholder='Enter Age'
          className='form-control'
          value={age || ''}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
        />
      </div>
      <button className='btn btn-success'>Submit</button>
    </form>
  );
}
