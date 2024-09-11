import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserService from '@/services/userService';

export default function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleUpdate = (e:any) => {
    e.preventDefault();
    UserService.updateUsers(`${id}`,{ name, role })
      .then(res => {
        navigate('/dashboard');
      })
      .catch(err => console.log(err));
  };

 

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2>Update ToDo</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='task'>Task</label>
            <input
              type='text'
              placeholder='Enter Task'
              className='form-control'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}
